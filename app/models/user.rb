class User < ActiveRecord::Base
  attr_accessible :city, :name, :state
  acts_as_gmappable
   def gmaps4rails_address
     puts "i am in modal withn #{state}"
        state
      end
      def index
@lat = params[:lat] || "19.71844"
@lon = params[:lon] || "-155.095228"
@zoom = params[:zoom] || "10"
end
        
end
