class SelectionsController < ApplicationController
  before_action :set_selection, only: [:show, :update, :destroy]

  # GET /selections
  def index
    @selections = Selection.all

    render json: @selections
  end

  # GET /selections/1
  def show
    render json: @selection
  end

  # POST /selections
  def create
    @selection = Selection.new(selection_params)

    if @selection.save
      render json: @selection, status: :created, location: @selection
    else
      render json: @selection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /selections/1
  def update
    if @selection.update(selection_params)
      render json: @selection
    else
      render json: @selection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /selections/1
  def destroy
    @selection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_selection
      @selection = Selection.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def selection_params
      params.require(:selection).permit(:order, :user_id, :restaurant_id)
    end
end
