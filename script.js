function myFunction() {

    var myArray = [
      { hex: '#4682B4', color: 'STEELBLUE' },
      { hex: '#FFF5EE', color: 'SEASHELL' },
      { hex: '#000000', color: 'BLACK' },
      { hex: '#DDA0DD', color: 'PLUM' },
      { hex: '#DC143C', color: 'CRIMSON' },
      { hex: '#663399', color: 'REBECCAPURPLE' },
      { hex: '#F0FFFF', color: 'AZURE' },
      { hex: '#FFDAB9', color: 'PEACHPUFF' },
      { hex: '#000080', color: 'NAVY' },
      { hex: '#00008B', color: 'DARKBLUE' },
      { hex: '#87CEEB', color: 'SKYBLUE' },
      { hex: '#191970', color: 'MIDNIGHTBLUE' },
      { hex: '#9370DB', color: 'MEDIUMPURPLE' },
      { hex: '#00FA9A', color: 'MEDIUMSPRINGGREEN' },
      { hex: '#32CD32', color: 'LIMEGREEN' },
      { hex: '#FF69B4', color: 'HOTPINK' },
      { hex: '#4169E1', color: 'ROYALBLUE' },
      { hex: '#FF0000', color: 'RED' },
      { hex: '#5F9EA0', color: 'CADETBLUE' },
      { hex: '#B0E0E6', color: 'POWDERBLUE' },
      { hex: '#FFE4E1', color: 'MISTYROSE' },
      { hex: '#BC8F8F', color: 'ROSYBROWN' },
      { hex: '#98FB98', color: 'PALEGREEN' },
      { hex: '#D2691E', color: 'CHOCOLATE' },
      { hex: '#00FF7F', color: 'SPRINGGREEN' },
      { hex: '#FFEFD5', color: 'PAPAYAWHIP' },
      { hex: '#F0FFF0', color: 'HONEYDEW' },
      { hex: '#B22222', color: 'FIREBRICK' },
      { hex: '#FFFAF0', color: 'FLORALWHITE' },
      { hex: '#FFD700', color: 'GOLD' },
      { hex: '#808080', color: 'GRAY' },
      { hex: '#DEB887', color: 'BURLYWOOD' },
      { hex: '#800000', color: 'MAROON' },
      { hex: '#FFF5EE', color: 'SEASHELL' },
      { hex: '#FFFACD', color: 'LEMONCHIFFON' },
      { hex: '#FFA500', color: 'ORANGE' },
      { hex: '#708090', color: 'SLATEGRAY' },
      { hex: '#696969', color: 'DIMGREY' },
      { hex: '#C0C0C0', color: 'SILVER' },
      { hex: '#FFC0CB', color: 'PINK' },
      { hex: '#FF6347', color: 'TOMATO' },
      { hex: '#FFDEAD', color: 'NAVAJOWHITE' },
      { hex: '#FA8072', color: 'SALMON' },
      { hex: '#DCDCDC', color: 'GAINSBORO' },
      { hex: '#F0F8FF', color: 'ALICEBLUE' },
      { hex: '#4682B4', color: 'STEELBLUE' },
      { hex: '#708090', color: 'SLATEGREY' },
      { hex: '#8A2BE2', color: 'BLUEVIOLET' },
      { hex: '#0000FF', color: 'BLUE' },
      { hex: '#D2B48C', color: 'TAN' },
      { hex: '#E6E6FA', color: 'LAVENDER' },
      { hex: '#808080', color: 'GREY' },
      { hex: '#008080', color: 'TEAL' },
      { hex: '#FF4500', color: 'ORANGERED' },
      { hex: '#1E90FF', color: 'DODGERBLUE' },
      { hex: '#D8BFD8', color: 'THISTLE' },
      { hex: '#FF7F50', color: 'CORAL' },
      { hex: '#FFFFFF', color: 'WHITE' },
      { hex: '#00BFFF', color: 'DEEPSKYBLUE' },
      { hex: '#F4A460', color: 'SANDYBROWN' },
      { hex: '#F5FFFA', color: 'MINTCREAM' },
      { hex: '#CD5C5C', color: 'INDIANRED' },
      { hex: '#6A5ACD', color: 'SLATEBLUE' },
      { hex: '#6495ED', color: 'CORNFLOWERBLUE' },
      { hex: '#2E8B57', color: 'SEAGREEN' },
      { hex: '#DB7093', color: 'PALEVIOLETRED' },
      { hex: '#FFF0F5', color: 'LAVENDERBLUSH' },
      { hex: '#FFFAFA', color: 'SNOW' },
      

      
    ];
  
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  
    console.log(randomItem);
  
    document.body.style.background = randomItem.hex;
    document.querySelector('#hex').innerHTML = randomItem.hex;
    document.querySelector('#color').innerHTML = randomItem.color;
  }
  
  myFunction();