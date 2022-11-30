import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  InformationCircleIcon,
  CheckIcon,
  BackspaceIcon,
} from '@heroicons/react/24/outline';
import Spinner from '@/components/spinner/Spinner';
import { API_URL } from '@/config/index';

import {
  InsideContainer,
  StyledContainer,
  StyledInput,
  StyledButton,
  HeaderContainer,
  StyledButtonContainer,
  FormFooter,
  HiddenContainer,
  PrevButton,
  SmallText,
  LargeText,
  StyledLabel,
} from './Styles';

type Props = {};

const GetCountries = () => {
  // Form values
  const [original, setOriginal] = useState('');
  const [destination, setDestination] = useState('');

  // First round
  const [originName, setOriginName] = useState('');
  const [originCode, setOriginCode] = useState('');
  const [destinationName, setDestinationName] = useState('');
  const [destinationCode, setDestinationCode] = useState('');
  const [amount, setAmount] = useState('');

  // Final values after conversion
  const [conversionRate, setConversionRate] = useState('');
  const [conversionResult, setConversionResult] = useState('');
  const [baseCode, setBaseCode] = useState('');
  const [targetCode, setTargetCode] = useState('');

  //Trigger
  const [firstTrigger, setFirstTrigger] = useState(false);
  const [secondTrigger, setSecondTrigger] = useState(false);
  const [thirdTrigger, setThirdTrigger] = useState(false);

  const [responseJSON, setResponseJSON] = useState(null);
  const [finalAmount, setFinalAmount] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any | null>(null);

  // Get orinating country code
  const getOriginatingCountryInfo = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${original}`);

    const data = await res.json();

    if (res.ok) {
      const name = data[0].name;
      const currency = data[0].currencies[0].code;
      console.log(`country: ${name} code: ${currency}`);
      setOriginName(name);
      setOriginCode(currency);
    } else {
      setError(data.message);
      setError(null);
    }
  };

  const getDestinationCountryInfo = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${destination}`);

    const data = await res.json();

    if (res.ok) {
      const name = data[0].name;
      const currency = data[0].currencies[0].code;
      console.log(`country: ${name} code: ${currency}`);
      setDestinationName(name);
      setDestinationCode(currency);
    } else {
      setError(data.message);
      setError(null);
    }
  };

  function amountSetter(e: number) {
    const amountInput = amount;
  }

  const getExchangeRate = async () => {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/cd6f34f7f7c40689ebcb5c23/pair/${originCode}/${destinationCode}/${amount}`
    );

    const data = await res.json();

    if (res.ok) {
      console.log(data);
      const rate = data.conversion_rate;
      const result = data.conversion_result;
      const base = data.base_code;
      const target = data.target_code;

      setConversionRate(rate);
      setConversionResult(result);
      setBaseCode(base);
      setTargetCode(target);

      console.log({ rate, result, base, target });
    } else {
      setError(data.message);
      setError(null);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getOriginatingCountryInfo();
    getDestinationCountryInfo();
    setFirstTrigger(true);
  };

  const handleValuation = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getExchangeRate();
    setSecondTrigger(true);
  };

  const reset = () => {
    setThirdTrigger(false);
    setFirstTrigger(false);
    setSecondTrigger(false);
    setOriginal('');
    setDestination('');
    setAmount('');
  };

  // const performOriginalCodeSearch = async (searchUrl: string) => {
  //   const controller = new AbortController();
  //   let shouldCancel = false;

  //   const callFetch = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch(searchUrl, {
  //         mode: 'cors',
  //       });
  //       const newResponseJSON = await response.json();
  //       // console.log(newResponseJSON);
  //       if (shouldCancel) return;

  //       setResponseJSON(newResponseJSON);
  //       setError(null);
  //     } catch (error) {
  //       let message = 'Unknown Error';
  //       if (error instanceof Error) message = error.message;
  //       else message = String(error);
  //       if (shouldCancel) return;
  //       setError(message);
  //       setResponseJSON(null);
  //     }

  //     setIsLoading(false);
  //   };

  //   callFetch();

  //   return () => {
  //     controller.abort();
  //     shouldCancel = true;
  //   };
  // };

  const clearError = () => {
    setError(null);
  };

  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //   }
  //   clearError();
  // });

  // useEffect(() => {
  //   const controller = new AbortController();
  //   let shouldCancel = false;

  //   const callFetch = async () => {
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch(
  //         `${COUNTRIES_URL}${originCode}/${destinationCode}/${amount}`
  //       );
  //       const newResponseJSON = await response.json();
  //       console.log(newResponseJSON);
  //       if (shouldCancel) return;

  //       setResponseJSON(newResponseJSON);
  //       setError(null);
  //     } catch (error) {
  //       let message = 'Unknown Error';
  //       if (error instanceof Error) message = error.message;
  //       else message = String(error);
  //       if (shouldCancel) return;
  //       setError(message);
  //       setResponseJSON(null);
  //     }

  //     setIsLoading(false);
  //   };

  //   callFetch();

  //   return () => {
  //     controller.abort();
  //     shouldCancel = true;
  //   };
  // }, []);

  // if (isLoading) return <Spinner />;
  // if (error)
  //   return <p className="dark:text-white">Oops, something went wrong</p>;

  return (
    <>
      <StyledContainer className={firstTrigger ? 'hidden' : 'flex'}>
        <InsideContainer>
          <HeaderContainer>4X conversion</HeaderContainer>
          <ToastContainer />
          <form
            onSubmit={handleSubmit}
            className="container"
            role="form"
            aria-label="Currency Exchange information"
          >
            <StyledLabel>Amount *</StyledLabel>
            <StyledInput
              placeholder="Enter amount"
              id="amount"
              type="number"
              value={amount}
              minLength={1}
              maxLength={100}
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAmount(e.target.value)
              }
            />
            <StyledLabel>From *</StyledLabel>
            <StyledInput
              placeholder="Enter a country"
              id="original"
              type="text"
              value={original}
              required
              minLength={2}
              maxLength={100}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOriginal(e.target.value)
              }
            />
            <StyledLabel>To *</StyledLabel>
            <StyledInput
              required
              placeholder="Enter country"
              id="destination"
              type="destination"
              minLength={2}
              maxLength={100}
              value={destination}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setDestination(e.target.value)
              }
            />
            <StyledButtonContainer>
              <StyledButton
                type="submit"
                role="button"
                aria-label="submit values for conversion"
              >
                Submit
              </StyledButton>
            </StyledButtonContainer>
          </form>
          <FormFooter>
            <InformationCircleIcon className="h-8 w-8 mr-2" />
            <p>Inputs denoted with * are required.</p>
          </FormFooter>
        </InsideContainer>
      </StyledContainer>

      {firstTrigger ? (
        <StyledContainer>
          <InsideContainer>
            <HeaderContainer>4X conversion</HeaderContainer>
            <ToastContainer />
            <HiddenContainer>
              <div className="flex flex-row font-semibold">
                <p>{`Convert ${amount} ${originCode} to ${destinationCode}?`}</p>
              </div>
            </HiddenContainer>
            <form
              onSubmit={handleValuation}
              className="container"
              role="form"
              aria-label="Submit conversion calculation"
            >
              <StyledButtonContainer>
                <StyledButton
                  type="submit"
                  role="button"
                  aria-label="submit conversion"
                >
                  <CheckIcon className="mr-2h-6 w-6" />
                  Convert
                </StyledButton>
              </StyledButtonContainer>
            </form>
          </InsideContainer>
        </StyledContainer>
      ) : (
        ''
      )}
      {secondTrigger ? (
        <StyledContainer>
          <InsideContainer>
            <form
              onSubmit={handleValuation}
              role="form"
              aria-label="Cancel conversion, return to beginning"
            ></form>

            <>
              <LargeText>{`${amount} ${baseCode} = ${targetCode} ${conversionResult}`}</LargeText>
              <SmallText>{`The base conversion rate is 1 ${baseCode} = ${conversionRate} ${targetCode}`}</SmallText>
            </>

            <>
              <StyledButtonContainer>
                <PrevButton
                  onClick={() => reset()}
                  role="button"
                  aria-label="rest form"
                >
                  <BackspaceIcon className="h-7 w-7 text-color-white mr-2" />
                  Go Back
                </PrevButton>
              </StyledButtonContainer>
            </>
            <FormFooter>
              <InformationCircleIcon className="h-8 w-8 mr-2" />
              <p>
                This is an informational tool only and is not intended to for a
                real world scenario. You should not rely on this tool for a real
                world forex rate. money.
              </p>
            </FormFooter>
          </InsideContainer>
        </StyledContainer>
      ) : (
        ''
      )}
    </>
  );
};

export default GetCountries;
