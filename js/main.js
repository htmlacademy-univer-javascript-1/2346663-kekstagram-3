import { getData } from './load.js';
import {renderPhotos} from './pictures.js';
import { showAlert } from './util.js';
import './validate.js';

getData(renderPhotos, showAlert);
