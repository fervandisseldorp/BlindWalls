import {Directive, Input, OnInit} from '@angular/core';

import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';

import { Mural } from './mural';
declare var google: any;

@Directive({
  selector: 'appSebmMap, [appSebmMap]'
})
export class DirectionsMapDirective implements OnInit {
  @Input() startingPoint: Mural;
  @Input() destination: Mural;
  @Input() wayPoints: Mural[];

  parsedLocations: {}[] = new Array();

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer({draggable: false});

      for (const p of this.wayPoints) {
        this.parsedLocations.push({location: new google.maps.LatLng(p.latitude, p.longitude)});
        console.log('Current parsed locations size: ' + this.parsedLocations.length);
      }

      const start = {location: new google.maps.LatLng(this.startingPoint.latitude, this.startingPoint.longitude)};
      const end = {location: new google.maps.LatLng(this.destination.latitude, this.destination.longitude)};

      directionsDisplay.setMap(map);
      directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 8,
          strokeOpacity: 0.7,
          strokeColor:  '#00468c'
        },
        suppressMarkers : false
      });
      directionsService.route({
        origin: start,
        destination: end,
        waypoints: this.parsedLocations,
        optimizeWaypoints: true,
        travelMode: 'WALKING'
      }, function(response, status) {
        console.log('Reached function. Status is: ' + status);
        if (status === 'OK') {
          console.log('SUCCESS');
          directionsDisplay.setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });

    });
  }

}
