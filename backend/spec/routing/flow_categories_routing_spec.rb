require "rails_helper"

RSpec.describe FlowCategoriesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/flow_categories").to route_to("flow_categories#index")
    end

    it "routes to #show" do
      expect(get: "/flow_categories/1").to route_to("flow_categories#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/flow_categories").to route_to("flow_categories#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/flow_categories/1").to route_to("flow_categories#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/flow_categories/1").to route_to("flow_categories#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/flow_categories/1").to route_to("flow_categories#destroy", id: "1")
    end
  end
end
