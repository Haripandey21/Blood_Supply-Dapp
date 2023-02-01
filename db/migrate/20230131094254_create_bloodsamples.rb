class CreateBloodsamples < ActiveRecord::Migration[7.0]
  def change
    create_table :bloodsamples do |t|
      t.integer :blood_unique_id
      t.string :blood_group
      t.integer :donated_time
    end
  end
end
