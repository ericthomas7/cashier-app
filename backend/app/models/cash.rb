class Cash < ApplicationRecord
    validates :value, presence: true
    validates :flow_type, presence: true
    validates :description, presence: true, length: { minimum: 3}
    validate :flow_is_one_of_them

    def flow_is_one_of_them
      if self.flow_type != 'income' && self.flow_type != 'expense'
        errors.add(:flow_type, 'must be equal to "income" or "expense"')
      end
    end
end
