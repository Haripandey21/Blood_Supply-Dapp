class CreateHospitals < ActiveRecord::Migration[7.0]
  def change
    create_table :hospitals do |t|
      t.string :address
      t.string :name
      t.integer :phone_number
      t.integer :added_time 
    end
  end
end
