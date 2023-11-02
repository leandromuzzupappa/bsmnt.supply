import { IconsProps } from "@data/interfaces/Icons";

export default function FooterIcon({ className, selfRef }: IconsProps) {
  return (
    <span ref={selfRef} className={className}>
      <svg
        width="312"
        height="177"
        viewBox="0 0 312 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M311.25 18.4885C311.25 18.8952 311.079 19.3569 310.626 19.8838C310.169 20.4157 309.454 20.9764 308.456 21.553C306.458 22.706 303.464 23.8431 299.539 24.9394C291.7 27.1287 280.322 29.1088 266.221 30.7747C238.028 34.1052 199.058 36.1672 156 36.1672C112.942 36.1672 73.972 34.1052 45.779 30.7747C31.678 29.1088 20.3 27.1287 12.461 24.9394C8.536 23.8431 5.54201 22.706 3.54401 21.553C2.54601 20.9764 1.83099 20.4157 1.37399 19.8838C0.920993 19.3569 0.75 18.8952 0.75 18.4885C0.75 18.0818 0.920993 17.6201 1.37399 17.0932C1.83099 16.5613 2.54601 16.0005 3.54401 15.424C5.54201 14.271 8.536 13.1338 12.461 12.0376C20.3 9.84832 31.678 7.86812 45.779 6.20232C73.972 2.87172 112.942 0.809814 156 0.809814C199.058 0.809814 238.028 2.87172 266.221 6.20232C280.322 7.86812 291.7 9.84832 299.539 12.0376C303.464 13.1338 306.458 14.271 308.456 15.424C309.454 16.0005 310.169 16.5613 310.626 17.0932C311.079 17.6201 311.25 18.0818 311.25 18.4885Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M311.25 64.2469C311.25 65.8219 310.341 67.4739 308.343 69.1849C306.35 70.8909 303.367 72.5709 299.454 74.1909C291.634 77.4299 280.273 80.3629 266.179 82.8319C238.003 87.7679 199.049 90.826 156 90.826C112.951 90.826 73.997 87.7679 45.821 82.8319C31.727 80.3629 20.366 77.4299 12.546 74.1909C8.63301 72.5709 5.65 70.8909 3.657 69.1849C1.659 67.4739 0.75 65.8219 0.75 64.2469C0.75 62.6719 1.659 61.0189 3.657 59.3089C5.65 57.6029 8.63301 55.9227 12.546 54.3019C20.366 51.0631 31.727 48.1301 45.821 45.661C73.997 40.7249 112.951 37.6678 156 37.6678C199.049 37.6678 238.003 40.7249 266.179 45.661C280.273 48.1301 291.634 51.0631 299.454 54.3019C303.367 55.9227 306.35 57.6029 308.343 59.3089C310.341 61.0189 311.25 62.6719 311.25 64.2469Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M311.25 133.982C311.25 139.439 307.172 144.821 299.335 149.858C291.533 154.872 280.192 159.417 266.112 163.244C237.962 170.897 199.031 175.639 156 175.639C112.969 175.639 74.038 170.897 45.888 163.244C31.808 159.417 20.467 154.872 12.665 149.858C4.82799 144.821 0.75 139.439 0.75 133.982C0.75 128.525 4.82799 123.143 12.665 118.106C20.467 113.091 31.808 108.547 45.888 104.719C74.038 97.0669 112.969 92.325 156 92.325C199.031 92.325 237.962 97.0669 266.112 104.719C280.192 108.547 291.533 113.091 299.335 118.106C307.172 123.143 311.25 128.525 311.25 133.982Z"
          stroke="white"
          strokeWidth="1.5"
        />
        <path d="M156 18.2899V133.747" stroke="white" strokeWidth="1.5" />
      </svg>
    </span>
  );
}
