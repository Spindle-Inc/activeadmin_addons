class SearchSelectInput < Formtastic::Inputs::StringInput
  def input_html_options
    opts = {}
    opts[:class] = "select2-ajax"
    opts["data-fields"] = (@options[:fields] || []).to_json
    opts["data-url"] = @options[:url] || ""
    opts["data-display_name"] = @options[:display_name] || "name"
    opts["data-minimum_input_length"] = @options[:minimum_input_length] || 1
    super.merge opts
  end
end
