var svg = d3.select('body').append('svg')
            .attr('width', 250)
            .attr('height', 250);

    //render the data
    function render(data){
            //Bind 
            var circles = svg.selectAll('circle').data(data);

            //Enter
            circles.enter().append('circle')
                .attr('r', 10).merge(circles) // <== !!!
                .attr('cx', function(d) { return d.x; })
                .attr('cy', function(d) { return d.y; });


            //Exit
            circles.exit().remove();
    }

   

    var myObjects = [
        {x: 100, y: 100},
        {x: 130, y: 120},
        {x: 80, y: 180},
        {x: 180, y: 80},
        {x: 180, y: 40}
    ];
    

    render(myObjects);