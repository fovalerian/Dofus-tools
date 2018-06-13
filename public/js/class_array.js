$(document).ready(function() {

    dofusClasses = [
        'cra',
        'ecaflip',
        'eliotrope',
        'eniripsa',
        'enutrof',
        'feca',
        'huppermage',
        'iop',
        'osamodas',
        'ouginak',
        'pandawa',
        'roublard',
        'sacrieur',
        'sadida',
        'sram',
        'steamer',
        'xelor',
        'zobal'
    ];


    for (i in dofusClasses) {
        var classProperties = [];

        $.ajax({
            type: "GET",
            url: "/spell_csv/"+dofusClasses[i]+"_spell_image_link.csv",
            dataType: "text",
            success: function (allText) {
                var allTextLines = allText.split(/\r\n|\n/);
                var headers = allTextLines[0].split(',');

                for (var i=1; i<allTextLines.length; i++) {
                    var data = allTextLines[i].split(',');
                    if (data.length == headers.length) {

                        var tarr = [];
                        for (var j=0; j<headers.length; j++) {

                            tarr[headers[j]] = data[j];
                        }
                        classProperties.push(tarr);
                    }


                }
                for (i in classProperties) {

                    console.log(classProperties[i]);
                    $('#class_array').append(
                        '<li><img src="'+classProperties[i]['image_link']+'"></li>'
                    );
                }

            }
        });
    }

});