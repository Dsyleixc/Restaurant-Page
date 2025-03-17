'use strict';

import './styles.css';
import { loadHome } from './home.js';

const contentDiv = document.querySelector('#content');

loadHome(contentDiv);
