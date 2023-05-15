class FlowCategory < ApplicationRecord
    validates :name, presence: true
    validates :flow_type, presence: true
    validate :flow_is_one_of_them

    def flow_is_one_of_them
      if self.flow_type != 'income' && self.flow_type != 'expense'
        errors.add(:flow_type, 'must be equal to "income" or "expense"')
      end
    end

    has_many :cashes
end
