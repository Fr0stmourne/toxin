/* eslint-disable */
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );

// function addSlider(options) {
//   $(options.inputSelector).slider({
//     range: true,
//     min: options.min,
//     max: options.max,
//     value: [options.valueMin, options.valueMax],
//     slide: function( event, ui ) {
//       $( options.textSelector ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
//     }
//   })

//   $( options.textSelector ).val( $(options.inputSelector).slider( "values", 0 ) +
//     " - " + $( options.inputSelector ).slider( "values", 1 ) );
// }

// addSlider({
//   inputSelector: '#slider-range',
//   min: 0,
//   max: 20000,
//   valueMin: 5000,
//   valueMax: 10000,
//   textSelector: '#amount'
// })