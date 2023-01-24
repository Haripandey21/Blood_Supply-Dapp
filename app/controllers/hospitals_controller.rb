class HospitalsController < ApplicationController

    def addpatients
    end 
    def getDataOfHospitals
        @hospitals = params[:hospitals]
        Hospital.create(address: @hospitals[0][0],name: @hospitals[0][1], phone_number: @hospitals[0][2])
     
      end    

end
