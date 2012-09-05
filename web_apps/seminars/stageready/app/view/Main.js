Ext.define("StageReady.view.Main", {
    extend: 'Ext.Carousel',

    config: {
        fullscreen: true,

        defaults: {
            styleHtmlContent: true
        },

        items: [
            {
                html : '<img src="resources/images/splash.jpg" alt="Splash Screen Image"/>',
                cls: 'splash'
            },
            {
                html : ['<h1>Stage Ready 2012</h1><p>Helping you to excel in promoting the',
                        'work of art that is your body</p><p>Presented By Tatiana Prokofyeva',
                        'and Maria ....</p>'].join(''),
                cls: 'page'
            },
            {
                html : ['<h1>Objectives</h1><ul><li>Inform</li><li>Equip</li><li>Prepare</li></ul>'].join(''),
                cls: 'page'
            },
            {
                html : ['<h1>Why compete? 50 Words</h1><p>Lorem ipsum dolor sit amet, consectetur',
                    ' adipiscing elit. Morbi est justo, varius non laoreet at, euismod vehicula libero.',
                    'Proin iaculis elementum magna quis sollicitudin. Mauris quis interdum justo. ',
                    'Quisque nec libero quam. Quisque a risus augue, sed suscipit dolor. Cras quis',
                    'magna eget orci dictum placerat. Etiam dictum tellus vel.</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : ['<h1>More info 70 Words</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing',
                        ' elit. Duis semper ultricies nulla, id dapibus dui pretium non. In condimentum ',
                        'facilisis sodales. Ut lacinia convallis orci eget facilisis. Aenean ac laoreet metus.',
                        'In eget orci lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,',
                        'per inceptos himenaeos. Donec aliquam, ante in fringilla congue, erat nunc rutrum ligula, ',
                        'imperdiet consectetur turpis massa at tellus. Nullam suscipit est vel enim porttitor.',
                        '</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : ['<h1>More info again 80 Words</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing',
                        'elit. Aenean erat felis, sollicitudin sed commodo at, blandit id lectus. Phasellus velit',
                        'massa, viverra convallis tempus in, lobortis quis tortor. Suspendisse ipsum velit, sodales',
                        'in congue ut, posuere eu mi. Maecenas ornare lacus sit amet ligula varius rhoncus iaculis',
                        'velit pharetra. Mauris consequat convallis sapien, quis condimentum velit viverra a.',
                        'Suspendisse bibendum rutrum venenatis. Aliquam ultrices metus sed ipsum ornare et ',
                        'tincidunt dui malesuada. Vestibulum tempus ante id leo molestie viverra. ',
                        'Aliquam.</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : ['<h1>And again 100 Words</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Pellentesque ac adipiscing arcu. Fusce placerat augue mauris. Suspendisse pulvinar',
                        'venenatis risus eget pulvinar. Vivamus et velit vel mauris accumsan condimentum id',
                        'vitae lectus. Fusce suscipit ultrices nibh nec pulvinar. Cras cursus commodo eros in,',
                        'tincidunt. Phasellus et massa libero. Proin pellentesque luctus libero, nec viverra erat',
                        'viverra vel. Ut in nisl non justo sollicitudin blandit. Suspendisse arcu nibh, venenatis',
                        'id dapibus sed, tristique in leo. Donec eget gravida ligula. Sed eleifend ipsum in ipsum',
                        'tempor vestibulum. Quisque consequat dictum nulla id congue. Aliquam erat volutpat. Aenean',
                        'porttitor diam purus. Mauris sit.</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : ['<h1>And even more again 150 Words</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing',
                        'elit. Nam sit amet sem lectus. Quisque condimentum blandit lacus in convallis. Fusce posuere',
                        'dolor quis nibh mattis non fringilla orci vestibulum. Nam id dolor ac quam cursus ultricies.',
                        'Quisque vitae massa neque. Cum sociis natoque penatibus et magnis dis parturient montes, ',
                        'nascetur ridiculus mus. Curabitur tincidunt lectus non sem venenatis ac feugiat risus ',
                        'pulvinar. Ut eu urna in metus commodo cursus et nec nunc. Quisque at nisi non lectus ',
                        'mattis ullamcorper. Cras tristique tincidunt tortor dignissim interdum. Curabitur id',
                        'sem purus, ac imperdiet lacus. Fusce sed risus quam. Praesent consequat porta nisl, ',
                        'eget bibendum lacus tempus id. Proin laoreet aliquam lectus accumsan suscipit. Cras ',
                        'fringilla turpis vel lorem consectetur lobortis. Class aptent taciti sociosqu ad litora',
                        'torquent per conubia nostra, per inceptos himenaeos. Nunc non nisl purus. Duis in orci ',
                        'felis. Donec vitae ultrices turpis. Curabitur ut orci tellus, quis vestibulum ',
                        'magna.</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : ['<h1>Nearly done now 200 Words </h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing',
                    ' elit. Nunc eu lacus eu dui malesuada viverra. Duis nunc nulla, vestibulum ac congue vel, ',
                    'ultrices a lorem. Integer sem velit, feugiat non sollicitudin a, ultricies et purus. ',
                    'Vestibulum a auctor dolor. Donec sodales scelerisque mi, sit amet fringilla eros congue ',
                    'congue. Ut lacinia elementum suscipit. Ut venenatis, est ac ullamcorper fermentum, risus ',
                    'arcu imperdiet enim, id blandit turpis tortor sed risus. Pellentesque habitant morbi tristique ',
                    'senectus et netus et malesuada fames ac turpis egestas. Etiam at velit urna. Etiam facilisis ',
                    'consectetur neque sodales tempus. Aliquam est quam, eleifend ac rhoncus quis, mollis et est. ',
                    'Curabitur a ultricies leo. Suspendisse potenti. In ut nisl in lorem eleifend volutpat. Cras ',
                    'cursus auctor diam, ac consectetur velit cursus sit amet. Vestibulum varius tortor vitae enim',
                    ' luctus vel tempus augue facilisis. Nullam et dolor turpis. Suspendisse potenti. Nam eros justo,',
                    ' adipiscing eu consequat consectetur, dapibus eget odio. Nulla non felis nunc. Nunc non ',
                    'risus magna. Vivamus sodales elit ut ante volutpat malesuada vitae et nisi. Curabitur accumsan ',
                    'feugiat urna sed euismod. Ut in magna tristique eros dignissim tincidunt in consequat odio. ',
                    'Integer nisi sapien, scelerisque pulvinar tincidunt a, cursus sed sem. Vestibulum congue ',
                    'est id massa.</p>'].join(''),
                cls: 'page',
                scrollable: 'vertical'
            },
            {
                html : '<h1>Go and Shine!</h1>',
                cls: 'page'
            }
        ]
    }
});

