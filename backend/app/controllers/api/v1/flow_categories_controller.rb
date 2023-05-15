module Api
  module V1
    class FlowCategoriesController < ApplicationController
      before_action :set_flow_category, only: %i[ show update destroy ]

      # GET /flow_categories
      def index
        @flow_categories = FlowCategory.all

        render json: @flow_categories
      end

      # GET /flow_categories/1
      def show
        render json: @flow_category
      end

      # POST /flow_categories
      def create
        @flow_category = FlowCategory.new(flow_category_params)

        if @flow_category.save
          render json: @flow_category, status: :created, location: @flow_category
        else
          render json: @flow_category.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /flow_categories/1
      def update
        if @flow_category.update(flow_category_params)
          render json: @flow_category
        else
          render json: @flow_category.errors, status: :unprocessable_entity
        end
      end

      # DELETE /flow_categories/1
      def destroy
        @flow_category.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_flow_category
          @flow_category = FlowCategory.find(params[:id])
        end

        # Only allow a list of trusted parameters through.
        def flow_category_params
          params.require(:flow_category).permit(:name, :flow_type)
        end
    end
  end
end
