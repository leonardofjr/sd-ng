class getData {
    constructor(endpoint, type, dataType) {
        this.endpoint = endpoint;
        this.type = type;
        this.dataType = dataType;

    }
    
     get() {
         return $.ajax({
             url: this.endpoint,
             type: this.type,
             dataType: this.dataType,
         });
    }

         
    }

class Gallery extends getData {
    constructor(host, endpoint, type, dataType) {
        super(endpoint, type, dataType)
        this.host = host;
    }

    init(data) {
        this.renderGallery(this.getHost(), data);
    }

    getHost() {
        return this.host;
    }
    

    renderGallery(host, data) {
        data.forEach(function (item) {
            var basename = item.basename;
            var id = item.id;
            $('.gallery div').append('\
                <div class="col-lg-3">\
                <img src="' + host + basename + '"' + 'data-id="' + id + '"' + '>\
            ' + '</div>');
        });


    }


    selectImage(e) {
        $('#gallery-overlay-checkbox').attr('data-id', this.id);
        $('.gallery div img').removeClass('active');
        $('.gallery .message').removeClass('d-none');
        $(e).addClass('active');


    }
   
    updateMessage(id) {
        var response = this.get(this.host + '/api/admin/gallery/' + id, 'GET' , 'json');
        response
        .then((data) => {
         
        })
    }
/**        $('.gallery .message').html('you\'ve selected ' + data[0].basename + ' as an overlay to this image.');
 */

    renderEmpty(ele1, ele2, attr) {
        $(ele1).empty();
        $('.message').addClass('d-none');
        $(ele2).removeAttr(attr);

    }


}

$('#gallery-overlay-checkbox').change(function () {
    var port = ':8000';
    var host = "http://" + window.location.hostname + port + '/assets/uploads/';
    var gallery = new Gallery(host, '/api/admin/gallery',  'GET', 'json',);

    if ($(this).prop('checked')) {
        gallery.get()
        .then((data) => {
            gallery.init(data);

            $('.gallery div img').click(function () {
                var item = new getData('http://startupdesigns:8000/api/admin/gallery/' + $(this).attr('data-id'), 'GET', 'json');
              
                console.log(item.get());
            })
        })
    }
    else {
        gallery.renderEmpty('.gallery div', '#gallery-overlay-checkbox', 'data-id');
    }
});



