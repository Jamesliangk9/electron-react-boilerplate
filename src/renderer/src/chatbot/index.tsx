import React, { useEffect, useState } from 'react';
import { loadConfig } from '../../util';

export default function Chatbot(): React.JSX.Element | null {
  const [iframeSrc, setIframeSrc] = useState<string>('');

  useEffect(() => {
    async function loadOrgId() {
      // Assuming loadConfig is a function that retrieves the stored config
      const config = await loadConfig();
      const orgid = config?.orgid ?? '';
      // Construct the iframe URL with the orgid
      const baseUrl = 'https://moxy.unilab.com.au/moxybot/moxybot.php';
      const aitoken = 'fce8708e027ae235fe59c87597722cdd60758864';
      const url = `${baseUrl}?aitoken=${aitoken}&orgid=${orgid}`;

      // Set the iframe source URL
      setIframeSrc(url);
    }

    loadOrgId().catch(() => {
      // noop
    });
  }, []);

  if (!iframeSrc) return null;

  return (
    <iframe
      src={iframeSrc}
      width="100%"
      height="100%"
      title="Moxybot"
      seamless
    />
  );
}
