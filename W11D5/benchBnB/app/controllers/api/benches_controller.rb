class Api::BenchesController < ApplicationController

    def index

        @benches = params[:bounds] ? Bench.in_bounds(params[:bounds]) : Bench.all

        if params[:seating]
            @benches = @benches.where(seating: (params[:seating][:minSeating]..params[:seating][:maxSeating]))
        end

        render :index
    end

    def create
        @bench = Bench.new(bench_params)
        if @bench.save
            render :index
        else
            render json: @bench.errors.full_messages
        end
    end

    private

    def bench_params
        params.require(:bench).permit(:description, :seating, :lat, :lng, :max_seating, :min_seating)
    end
end