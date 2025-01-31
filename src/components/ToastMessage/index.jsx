import { Description, Title } from './styled';

export const ToastMessage = ({ title, description }) => {
  return (
    <div>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </div>
  );
};
