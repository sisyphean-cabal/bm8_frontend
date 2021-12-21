declare module 'react-phone-number-input/input' {
    interface CustomPhoneInputProps {
      onChange: (value: string) => void;
      value: string;
      placeholder: string;
      className: string;
    }
  
    export default class PhoneInput extends React.Component<CustomPhoneInputProps, object> {}
  }
  