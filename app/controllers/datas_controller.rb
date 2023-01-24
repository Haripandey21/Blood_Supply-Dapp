class DatasController < ApplicationController

    def getDataOfHospitals
        @bloodDatas = params[:bloodData]
        Bloodunit.create(blood_unique_id: @bloodDatas[0][0],blood_group: @bloodDatas[0][1],donated_time: @bloodDatas[0][2], status: @bloodDatas[0][3],)
      end     
end
