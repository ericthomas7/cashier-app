class AddFlowcategoryToCashes < ActiveRecord::Migration[7.0]
  def change
    add_reference :cashes, :flow_category
  end
end
