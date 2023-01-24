class CreateBloodunits < ActiveRecord::Migration[7.0]
  def change
    create_table :bloodunits do |t|

      t.integer :blood_unique_id
      t.string :blood_group
      t.integer :donated_time
      t.integer :status
    end
  end
end
