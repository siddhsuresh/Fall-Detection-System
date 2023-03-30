defmodule Iwp.User.FallSensorReading do
  use Ecto.Schema
  import Ecto.Changeset

  schema "fall_sensor_readings" do
    field :accX, :float
    field :accY, :float
    field :accZ, :float
    field :fall?, :boolean, default: false
    field :gyX, :float
    field :gyY, :float
    field :gyZ, :float

    timestamps()
  end

  @doc false
  def changeset(fall_sensor_reading, attrs) do
    fall_sensor_reading
    |> cast(attrs, [:accX, :accY, :accZ, :gyX, :gyY, :gyZ, :fall?])
    |> validate_required([:accX, :accY, :accZ, :gyX, :gyY, :gyZ, :fall?])
  end
end
