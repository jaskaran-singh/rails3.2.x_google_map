class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :state
      t.string :city
      t.boolean :gmaps
      t.float :longitude
      t.float :latitude 

      t.timestamps
    end
  end
end
