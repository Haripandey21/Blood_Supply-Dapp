class SuppliersController < ApplicationController

    def adddonors
    end 
    def shipbloods
    end 
    def getdata
        @suppliers = params[:suppliers]
        Supplier.create(address: @suppliers[0][0],name: @suppliers[0][1], phone_number: @suppliers[0][2],added_time: @suppliers[0][3])
        
          
      end    

end
