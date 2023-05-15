class RemoveFlowTypeFromCashes < ActiveRecord::Migration[7.0]
  def change
    remove_column :cashes, :flow_type, :string
  end
end
