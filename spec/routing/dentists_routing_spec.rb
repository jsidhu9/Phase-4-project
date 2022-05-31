require "rails_helper"

RSpec.describe DentistsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/dentists").to route_to("dentists#index")
    end

    it "routes to #show" do
      expect(get: "/dentists/1").to route_to("dentists#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/dentists").to route_to("dentists#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/dentists/1").to route_to("dentists#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/dentists/1").to route_to("dentists#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/dentists/1").to route_to("dentists#destroy", id: "1")
    end
  end
end
