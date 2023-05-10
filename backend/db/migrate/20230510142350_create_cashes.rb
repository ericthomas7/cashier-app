class CreateCashes < ActiveRecord::Migration[7.0]
  def change
    create_table :cashes do |t|
      t.decimal :value
      t.string :flow_type
      t.string :description

      t.timestamps
    end
  end
end
