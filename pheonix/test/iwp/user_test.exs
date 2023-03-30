defmodule Iwp.UserTest do
  use Iwp.DataCase

  alias Iwp.User

  describe "sensor_readings" do
    alias Iwp.User.SensorReading

    import Iwp.UserFixtures

    @invalid_attrs %{accX: nil, accY: nil, accZ: nil, gyX: nil, gyY: nil, gyZ: nil}

    test "list_sensor_readings/0 returns all sensor_readings" do
      sensor_reading = sensor_reading_fixture()
      assert User.list_sensor_readings() == [sensor_reading]
    end

    test "get_sensor_reading!/1 returns the sensor_reading with given id" do
      sensor_reading = sensor_reading_fixture()
      assert User.get_sensor_reading!(sensor_reading.id) == sensor_reading
    end

    test "create_sensor_reading/1 with valid data creates a sensor_reading" do
      valid_attrs = %{accX: 120.5, accY: 120.5, accZ: 120.5, gyX: 120.5, gyY: 120.5, gyZ: 120.5}

      assert {:ok, %SensorReading{} = sensor_reading} = User.create_sensor_reading(valid_attrs)
      assert sensor_reading.accX == 120.5
      assert sensor_reading.accY == 120.5
      assert sensor_reading.accZ == 120.5
      assert sensor_reading.gyX == 120.5
      assert sensor_reading.gyY == 120.5
      assert sensor_reading.gyZ == 120.5
    end

    test "create_sensor_reading/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = User.create_sensor_reading(@invalid_attrs)
    end

    test "update_sensor_reading/2 with valid data updates the sensor_reading" do
      sensor_reading = sensor_reading_fixture()
      update_attrs = %{accX: 456.7, accY: 456.7, accZ: 456.7, gyX: 456.7, gyY: 456.7, gyZ: 456.7}

      assert {:ok, %SensorReading{} = sensor_reading} = User.update_sensor_reading(sensor_reading, update_attrs)
      assert sensor_reading.accX == 456.7
      assert sensor_reading.accY == 456.7
      assert sensor_reading.accZ == 456.7
      assert sensor_reading.gyX == 456.7
      assert sensor_reading.gyY == 456.7
      assert sensor_reading.gyZ == 456.7
    end

    test "update_sensor_reading/2 with invalid data returns error changeset" do
      sensor_reading = sensor_reading_fixture()
      assert {:error, %Ecto.Changeset{}} = User.update_sensor_reading(sensor_reading, @invalid_attrs)
      assert sensor_reading == User.get_sensor_reading!(sensor_reading.id)
    end

    test "delete_sensor_reading/1 deletes the sensor_reading" do
      sensor_reading = sensor_reading_fixture()
      assert {:ok, %SensorReading{}} = User.delete_sensor_reading(sensor_reading)
      assert_raise Ecto.NoResultsError, fn -> User.get_sensor_reading!(sensor_reading.id) end
    end

    test "change_sensor_reading/1 returns a sensor_reading changeset" do
      sensor_reading = sensor_reading_fixture()
      assert %Ecto.Changeset{} = User.change_sensor_reading(sensor_reading)
    end
  end

  describe "sensor_readings" do
    alias Iwp.User.SensorReading

    import Iwp.UserFixtures

    @invalid_attrs %{accX: nil, accY: nil, accZ: nil, fall?: nil, gyX: nil, gyY: nil, gyZ: nil}

    test "list_sensor_readings/0 returns all sensor_readings" do
      sensor_reading = sensor_reading_fixture()
      assert User.list_sensor_readings() == [sensor_reading]
    end

    test "get_sensor_reading!/1 returns the sensor_reading with given id" do
      sensor_reading = sensor_reading_fixture()
      assert User.get_sensor_reading!(sensor_reading.id) == sensor_reading
    end

    test "create_sensor_reading/1 with valid data creates a sensor_reading" do
      valid_attrs = %{accX: 120.5, accY: 120.5, accZ: 120.5, fall?: true, gyX: 120.5, gyY: 120.5, gyZ: 120.5}

      assert {:ok, %SensorReading{} = sensor_reading} = User.create_sensor_reading(valid_attrs)
      assert sensor_reading.accX == 120.5
      assert sensor_reading.accY == 120.5
      assert sensor_reading.accZ == 120.5
      assert sensor_reading.fall? == true
      assert sensor_reading.gyX == 120.5
      assert sensor_reading.gyY == 120.5
      assert sensor_reading.gyZ == 120.5
    end

    test "create_sensor_reading/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = User.create_sensor_reading(@invalid_attrs)
    end

    test "update_sensor_reading/2 with valid data updates the sensor_reading" do
      sensor_reading = sensor_reading_fixture()
      update_attrs = %{accX: 456.7, accY: 456.7, accZ: 456.7, fall?: false, gyX: 456.7, gyY: 456.7, gyZ: 456.7}

      assert {:ok, %SensorReading{} = sensor_reading} = User.update_sensor_reading(sensor_reading, update_attrs)
      assert sensor_reading.accX == 456.7
      assert sensor_reading.accY == 456.7
      assert sensor_reading.accZ == 456.7
      assert sensor_reading.fall? == false
      assert sensor_reading.gyX == 456.7
      assert sensor_reading.gyY == 456.7
      assert sensor_reading.gyZ == 456.7
    end

    test "update_sensor_reading/2 with invalid data returns error changeset" do
      sensor_reading = sensor_reading_fixture()
      assert {:error, %Ecto.Changeset{}} = User.update_sensor_reading(sensor_reading, @invalid_attrs)
      assert sensor_reading == User.get_sensor_reading!(sensor_reading.id)
    end

    test "delete_sensor_reading/1 deletes the sensor_reading" do
      sensor_reading = sensor_reading_fixture()
      assert {:ok, %SensorReading{}} = User.delete_sensor_reading(sensor_reading)
      assert_raise Ecto.NoResultsError, fn -> User.get_sensor_reading!(sensor_reading.id) end
    end

    test "change_sensor_reading/1 returns a sensor_reading changeset" do
      sensor_reading = sensor_reading_fixture()
      assert %Ecto.Changeset{} = User.change_sensor_reading(sensor_reading)
    end
  end

  describe "fall_sensor_readings" do
    alias Iwp.User.FallSensorReading

    import Iwp.UserFixtures

    @invalid_attrs %{accX: nil, accY: nil, accZ: nil, fall?: nil, gyX: nil, gyY: nil, gyZ: nil}

    test "list_fall_sensor_readings/0 returns all fall_sensor_readings" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      assert User.list_fall_sensor_readings() == [fall_sensor_reading]
    end

    test "get_fall_sensor_reading!/1 returns the fall_sensor_reading with given id" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      assert User.get_fall_sensor_reading!(fall_sensor_reading.id) == fall_sensor_reading
    end

    test "create_fall_sensor_reading/1 with valid data creates a fall_sensor_reading" do
      valid_attrs = %{accX: 120.5, accY: 120.5, accZ: 120.5, fall?: true, gyX: 120.5, gyY: 120.5, gyZ: 120.5}

      assert {:ok, %FallSensorReading{} = fall_sensor_reading} = User.create_fall_sensor_reading(valid_attrs)
      assert fall_sensor_reading.accX == 120.5
      assert fall_sensor_reading.accY == 120.5
      assert fall_sensor_reading.accZ == 120.5
      assert fall_sensor_reading.fall? == true
      assert fall_sensor_reading.gyX == 120.5
      assert fall_sensor_reading.gyY == 120.5
      assert fall_sensor_reading.gyZ == 120.5
    end

    test "create_fall_sensor_reading/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = User.create_fall_sensor_reading(@invalid_attrs)
    end

    test "update_fall_sensor_reading/2 with valid data updates the fall_sensor_reading" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      update_attrs = %{accX: 456.7, accY: 456.7, accZ: 456.7, fall?: false, gyX: 456.7, gyY: 456.7, gyZ: 456.7}

      assert {:ok, %FallSensorReading{} = fall_sensor_reading} = User.update_fall_sensor_reading(fall_sensor_reading, update_attrs)
      assert fall_sensor_reading.accX == 456.7
      assert fall_sensor_reading.accY == 456.7
      assert fall_sensor_reading.accZ == 456.7
      assert fall_sensor_reading.fall? == false
      assert fall_sensor_reading.gyX == 456.7
      assert fall_sensor_reading.gyY == 456.7
      assert fall_sensor_reading.gyZ == 456.7
    end

    test "update_fall_sensor_reading/2 with invalid data returns error changeset" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      assert {:error, %Ecto.Changeset{}} = User.update_fall_sensor_reading(fall_sensor_reading, @invalid_attrs)
      assert fall_sensor_reading == User.get_fall_sensor_reading!(fall_sensor_reading.id)
    end

    test "delete_fall_sensor_reading/1 deletes the fall_sensor_reading" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      assert {:ok, %FallSensorReading{}} = User.delete_fall_sensor_reading(fall_sensor_reading)
      assert_raise Ecto.NoResultsError, fn -> User.get_fall_sensor_reading!(fall_sensor_reading.id) end
    end

    test "change_fall_sensor_reading/1 returns a fall_sensor_reading changeset" do
      fall_sensor_reading = fall_sensor_reading_fixture()
      assert %Ecto.Changeset{} = User.change_fall_sensor_reading(fall_sensor_reading)
    end
  end
end
