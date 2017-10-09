import {Directive, Input } from '@angular/core';

import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';

import { Mural } from '../models/mural';
declare var google: any;

@Directive({
  selector: 'appSebmMap, [appSebmMap]'
})
export class DirectionsMapDirective {
  @Input() startingPoint: Mural;
  @Input() destination: Mural;
  @Input() wayPoints: Array<Mural>;
  @Input() travelMode: String;

  parsedLocations: {}[] = new Array();

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
    this.createMap();
  }


  createMap() {
    this.gmapsApi.getNativeMap().then(map => {
      this.wayPoints.shift();
      this.wayPoints.pop();

      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer({draggable: false});

      this.wayPoints.forEach((points, i) => {
        this.parsedLocations.push({location: new google.maps.LatLng(points.latitude, points.longitude)});
      });

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
        travelMode: this.travelMode
      }, function(response, status) {
        console.log('Reached function directions-map. Status is: ' + status);
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          console.log('Directions request failed due to ' + status);
        }
      });

    });
  }

}
