class SearchTagsInput < Formtastic::Inputs::SelectInput
  def input_html_options
    opts = {}
    opts[:class] = "select2-tags"
    opts["data-fields"] = (@options[:fields] || []).to_json
    opts["data-url"] = @options[:url] || ""
    opts["data-minimum_input_length"] = @options[:minimum_input_length] || 1
    super.merge opts
  end
end
