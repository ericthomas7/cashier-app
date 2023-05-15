class Cash < ApplicationRecord
    validates :value, presence: true
    validates :description, presence: true, length: { minimum: 3}

    belongs_to :flow_category
end
