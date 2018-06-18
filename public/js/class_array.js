$(document).ready(function() {

    dofusClasses = [
        'ecaflip',
        'eniripsa',
        'iop',
        'cra',
        'feca',
        'sacrieur',
        'sadida',
        'osamodas',
        'enutrof',
        'sram',
        'xelor',
        'pandawa',
        'roublard',
        'zobal',
        'steamer',
        'eliotrope',
        'huppermage',
        'ouginak'
    ];

    $.ajax({
        type: "GET",
        url: "/class_csv/class_image_link.csv",
        dataType: "text",
        success: function (allText) {
            var allTextLines = allText.split(/\r\n|\n/);
            var j = 0;
            var tarr = [];
            for (var i=0; i<(allTextLines.length); i++) {
                var data = allTextLines[i].split(',');
                tarr[j] = data[0];
                j++;
            }

            $(".class_icon_div").append(
                '<ul class="class_image_list"></ul>'
            );

            j = 0;
            for (i in dofusClasses) {
                $(".class_image_list").append(
                    '<li class="class_image_li"><img class="class_image" alt="'+dofusClasses[i]+'" src="'+tarr[j]+'" /></li>'
                );
                j++;
            }
        }
    });

    // for (i in dofusClasses) {
    //     var classProperties = [];

        // $.ajax({
        //     type: "GET",
        //     url: "/spell_csv/"+dofusClasses[i]+"_spell_image_link.csv",
        //     dataType: "text",
        //     success: function (allText) {
        //         var allTextLines = allText.split(/\r\n|\n/);
        //         var headers = allTextLines[0].split(',');
        //
        //         for (var i=1; i<allTextLines.length; i++) {
        //             var data = allTextLines[i].split(',');
        //             if (data.length == headers.length) {
        //
        //                 var tarr = [];
        //                 for (var j=0; j<headers.length; j++) {
        //
        //                     tarr[headers[j]] = data[j];
        //                 }
        //                 classProperties.push(tarr);
        //             }
        //         }
        //
        //         $('#class_array_div').append(
        //             '<ul class="'+dofusClasses[i]+'_spell_image_list class_spell_image_list"></ul>'
        //         );
        //
        //         for (i in classProperties) {
        //             $('.'+dofusClasses[i]+'_spell_image_list').append(
        //                 '<li><img src="'+classProperties[i]['image_link']+'"></li>'
        //             );
        //         }
        //
        //     }
        // });
    // }

});