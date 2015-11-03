//= require select2
//= require_self

$(function() {

  setupSelect2();

  $(document).on('has_many_add:after', setupSelect2);

  function setupSelect2() {
    $('.select2-tags').each(function(i, el) {
      $(el).select2({
        width: '80%',
        tags: $(el).data('collection')
      });
    });

    $('select:not(.default-select)').each(function(i, el) {
      if ($(el).closest('.filter_form').length > 0) {
        $(el).select2({
          width: 'resolve'
        });
      } else {
        $(el).select2({
          width: '80%'
        });
      }
    });

    $('.select2-ajax').each(function(i, el) {
      var url = $(el).data('url');
      var fields = $(el).data('fields');
      var displayName = $(el).data('display_name');
      var minimumInputLength = $(el).data('minimum_input_length');
      var order = fields[0] + "_desc";

      $(el).select2({
        width: '80%',
        ajax: {
          url: url,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            var query = {m: "or"};
            fields.forEach(function(field) {
              query[field + "_contains"] = params.term;
            });

            return {
              order: order,
              q: query
            };
          },
          processResults: function (data, page) {
            return {
              results: jQuery.map(data, function(resource) {
                return {
                  id: resource.id,
                  text: resource[displayName]
                };
              })
            };
          },
          cache: true
        },
        minimumInputLength: minimumInputLength
      });
    });

    $('.select2-ajax-tags').each(function(i, el) {
      var url = $(el).data('url');
      var fields = $(el).data('fields');
      var displayName = $(el).data('display_name');
      var minimumInputLength = $(el).data('minimum_input_length');
      var order = fields[0] + "_desc";

      $(el).select2({
        width: '80%',
        ajax: {
          url: url,
          dataType: 'json',
          delay: 250,
          data: function (params) {
            var query = {m: "or"};
            fields.forEach(function(field) {
              query[field + "_contains"] = params.term;
            });

            return {
              order: order,
              q: query
            };
          },
          processResults: function (data, page) {
            return {
              results: jQuery.map(data, function(resource) {
                return {
                  id: resource.id,
                  text: resource[displayName]
                };
              })
            };
          },
          cache: true
        },
        minimumInputLength: minimumInputLength
      });
    });
  }
});
