class Api::BenchesController < ApplicationController

    def index
        # debugger;
        # @benches = Bench.in_bounds(params[:bounds])
        # @benches = bounds ? Bench.in_bounds(bounds) : Bench.all
        @benches = Bench.all
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
        params.require(:bench).permit(:description, :lat, :lng)
    end
end