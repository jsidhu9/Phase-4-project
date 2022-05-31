require "rails_helper"

RSpec.describe AppointmentSlotsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/appointment_slots").to route_to("appointment_slots#index")
    end

    it "routes to #show" do
      expect(get: "/appointment_slots/1").to route_to("appointment_slots#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/appointment_slots").to route_to("appointment_slots#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/appointment_slots/1").to route_to("appointment_slots#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/appointment_slots/1").to route_to("appointment_slots#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/appointment_slots/1").to route_to("appointment_slots#destroy", id: "1")
    end
  end
end
