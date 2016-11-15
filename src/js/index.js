// Javascript Entry Point
import angular from 'angular';

import { MainController } from "./mainController.js";

angular
.module('app', [])
.controller('MainController', MainController)