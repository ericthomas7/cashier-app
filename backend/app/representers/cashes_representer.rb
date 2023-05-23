class CashesRepresenter
    def initialize(cashes)
        @cashes = cashes
    end


    def as_json_array
        cashes.map do |cash|
            {
                id: cash.id,
                value: cash.value,
                description: cash.description,
                flow_type: cash.flow_category.flow_type,
                flow_category_name: cash.flow_category.name
            }
        end
    end

    def as_json
        {
            id: cashes.id,
            value: cashes.value,
            description: cashes.description,
            flow_type: cashes.flow_category.flow_type,
            flow_category_name: cashes.flow_category.name
        }
    end


    private 
        attr_reader :cashes
end