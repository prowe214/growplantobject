var counter = 0;

var plant = {
    type: 'seed',
    height: 0,
    give: function(thing) {

        if (thing === 'water') {

            if (plant.type === 'plant' || plant.type === 'flower') {
                if (plant.height < 12) {
                    plant.height = plant.height + 2;
                } else {
                    counter = counter + 1;
                    if (counter === 4) {
                        plant.type = 'dead';
                        plant.height = '6 feet under';
                    };
                };
            };
            if (plant.type === 'seed') {
                plant.type = 'plant';
            };
        };
        if (thing === 'food') {

            if (plant.type === 'plant' || plant.type === 'flower') {
                if (plant.height < 12) {
                    plant.height = plant.height + 1;
                } else {
                    counter += 1;
                    if (counter === 4) {
                        plant.type = 'dead';
                        plant.height = '6 feet under';
                    };
                };
            };
        };
        if (thing === 'sun') {
            plant.type = 'flower';
        };
        if (thing === 'clouds') {
            plant.type = 'plant';
        };
        if (thing === 'antifreeze') {

            plant.type = 'dead';
            plant.height = '6 feet under';
        };


        console.log(plant);
    }
}
