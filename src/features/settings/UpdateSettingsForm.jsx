import useSettings from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const { isPending, settings } = useSettings();
  const { updateSetting, isUpdating } = useUpdateSetting();
  const isWorking = isPending || isUpdating;

  function handleUpdate(e, field) {
    if (!e.target.value) return;
    updateSetting({ [field]: e.target.value });
  }

  if (isPending) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isWorking}
          defaultValue={settings.minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={settings.maxBookingLength}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          defaultValue={settings.maxGuestsPerBooking}
          disabled={isWorking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          defaultValue={settings.breakfastPrice}
          disabled={isWorking}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
