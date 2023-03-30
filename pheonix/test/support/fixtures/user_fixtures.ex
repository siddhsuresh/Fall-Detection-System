defmodule Iwp.UserFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Iwp.User` context.
  """

  @doc """
  Generate a sensor_reading.
  """
  def sensor_reading_fixture(attrs \\ %{}) do
    {:ok, sensor_reading} =
      attrs
      |> Enum.into(%{
        accX: 120.5,
        accY: 120.5,
        accZ: 120.5,
        gyX: 120.5,
        gyY: 120.5,
        gyZ: 120.5
      })
      |> Iwp.User.create_sensor_reading()

    sensor_reading
  end

  @doc """
  Generate a sensor_reading.
  """
  def sensor_reading_fixture(attrs \\ %{}) do
    {:ok, sensor_reading} =
      attrs
      |> Enum.into(%{
        accX: 120.5,
        accY: 120.5,
        accZ: 120.5,
        fall?: true,
        gyX: 120.5,
        gyY: 120.5,
        gyZ: 120.5
      })
      |> Iwp.User.create_sensor_reading()

    sensor_reading
  end

  @doc """
  Generate a fall_sensor_reading.
  """
  def fall_sensor_reading_fixture(attrs \\ %{}) do
    {:ok, fall_sensor_reading} =
      attrs
      |> Enum.into(%{
        accX: 120.5,
        accY: 120.5,
        accZ: 120.5,
        fall?: true,
        gyX: 120.5,
        gyY: 120.5,
        gyZ: 120.5
      })
      |> Iwp.User.create_fall_sensor_reading()

    fall_sensor_reading
  end
end
