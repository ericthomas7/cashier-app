class CreateFlowCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :flow_categories do |t|
      t.string :name
      t.string :flow_type

      t.timestamps
    end
  end
end
