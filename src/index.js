// import _ from 'lodash';
// import './styles/style.css';
import Avatar from './assets/avatar.jpg';
import {cube} from './scripts/math';

// 检测环境变量
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');
    // loadash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack dev server'], ' ');
    element.innerHTML = [
        'Hello world!',
        '3 cube is equal to ' + cube(3)
    ].join('\n\n');
    // element.classList.add('hello');

    // 添加图像
    var myImg = new Image();
    myImg.src = Avatar;

    element.appendChild(myImg);

    return element;
}

document.body.appendChild(component());
