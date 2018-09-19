// selecs a single element on the page by css tag
d3.select();
// Selects all items py a css selector
d3.selectAll();

d3.select('h1')
// styling for the h1 element
.style('color','red')
//  sets attributes
.attr('id','head')
// sets the text to bingo from what it is( take microseconds to render)
.text('Bingo');

// selecting and appending to elements
d3.select('footer')
//  appends a element to the tage above it
.append('p')
// adds the innerHTML text to the created element
.text('this is some text');

d3.select('footer').append('p').text('this is some more text');
d3.select('footer').append('p').text('this is even more text');

// Selects all measuring
d3.selectAll('p').style('color','blue');
