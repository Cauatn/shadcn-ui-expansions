import React from 'react';
import { PageSubTitle, PageTemplate } from '@/app/(docs)/docs/components/page-template';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';
import { Steppers } from '@/components/ui/steppers';
import { Metadata } from 'next';
import { baseMetadata } from '@/app/(docs)/layout-parts/base-metadata';
import { Reference, ReferenceBorder } from '@/app/(docs)/docs/components/reference';
import Usage from '@/app/(docs)/docs/components/usage';
import { P } from '@/components/ui/heading-with-anchor';
import { InlineCode } from '@/components/ui/inline-code';
import { PropLink } from '@/app/(docs)/docs/components/props-table/prop-link';
import MultipleSelectorDemo from '@/app/(docs)/docs/multiple-selector/multiple-selector-demo';
import MultipleSelectorControlled from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-controlled';
import MultipleSelectorWithDisabledOption from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-disable-option';
import MultipleSelectorWithAsyncSearch from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-async-search';
import MultipleSelectorWithMaxSelected from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-max-selected';
import { PropsTable } from '@/app/(docs)/docs/components/props-table/props-table';
import { multipleSelectorProp } from '@/app/(docs)/docs/multiple-selector/multiple-selector-prop';
import MultipleSelectorNoPlaceholderWhenSelected from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-no-placeholder-when-selected';
import MultipleSelectorWithForm from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-form';
import MultipleSelectorDisabled from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-disabled';
import MultipleSelectorWithGroup from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-group';
import MultipleSelectorNoDefaultSelect from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-no-default-select';
import MultipleSelectorWithFixedOption from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-fixed-option';
import MultipleSelectorCreatable from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-creatable';
import MultipleSelectorWithAsyncSearchAndCreatable from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-async-search-and-creatable';
import MultipleSelectorWithAsyncSearchAndCreatableAndGroup from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-async-search-and-creatable-and-group';
import MultipleSelectorMaxTextLength from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-max-text-length';
import MultipleSelectorRef from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-ref';
import MultipleSelectorCommandProps from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-commandprops';
import MultipleSelectorWithAsyncSearchAndOnFocus from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-with-async-search-and-onfocus';
import MultipleSelectorManuallyControlledOptions from '@/app/(docs)/docs/multiple-selector/usage/multiple-selector-manually-controlled-options';

export const metadata: Metadata = baseMetadata({
  title: 'Multiple Selector',
  description:
    'Fast,composable, fully-featured multiple selector for React. such as async search with debounce, maximum selected count, grouping, creatable selector ...etc.',
});

const MultipleSelectorPage = () => {
  return (
    <PageTemplate
      title="Multiple Selector"
      description="Fast, composable, fully-featured multiple selector for React."
    >
      <ReferenceBorder>
        <Reference href="https://ui.shadcn.com/docs/components/command" />
        <Reference href="https://github.com/pacocoursey/cmdk" text="cmdk" />
      </ReferenceBorder>

      <PageSubTitle>About</PageSubTitle>
      <P className="text-muted-foreground">
        This component is inspired by{' '}
        <PropLink href="https://craft.mxkaske.dev/post/fancy-multi-select">
          <InlineCode>Fancy Multi Select</InlineCode>
        </PropLink>{' '}
        and includes additional features that{' '}
        <PropLink href="https://react-select.com/home">
          <InlineCode>React-Select</InlineCode>
        </PropLink>{' '}
        offers.
      </P>
      <P className="text-muted-foreground">
        {' '}
        It is built on top of <InlineCode>Command</InlineCode> component in shadcn-ui, which is base
        on{' '}
        <PropLink href="https://github.com/pacocoursey/cmdk">
          <InlineCode>cmdk</InlineCode>
        </PropLink>
        .
      </P>
      <ul className="list-disc p-5 text-lg font-normal leading-5 text-muted-foreground lg:text-xl">
        <li>Async search with debounce.</li>
        <li>Creatable selector — create option when there is no option matched.</li>
        <li>Grouping functionality.</li>
        <li>
          Working with <InlineCode>react-hook-form</InlineCode>.
        </li>
        <li>Customize your own loading spinner and empty indicator by giving props.</li>
        <li>Fixed options, maximum selected count, maximum input text length.</li>
        <li>
          Ability to disable the default selection of the first item. (see more about the{' '}
          <PropLink href="https://github.com/pacocoursey/cmdk/issues/171">
            <InlineCode>issue</InlineCode>
          </PropLink>
          )
        </li>
      </ul>

      <PreviewCodeCard path="app/(docs)/docs/multiple-selector/multiple-selector-demo.tsx">
        <MultipleSelectorDemo />
      </PreviewCodeCard>

      <PageSubTitle>Installation</PageSubTitle>
      <Steppers
        withInstall
        codePath="components/ui/multiple-selector.tsx"
        installScript="npx shadcn-ui@latest add command badge"
        withEnd
      />

      <PageSubTitle>Usage</PageSubTitle>
      <Usage
        title="Disable Option"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-disable-option.tsx"
      >
        <MultipleSelectorWithDisabledOption />
      </Usage>
      <Usage
        title="Disabled"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-disabled.tsx"
      >
        <MultipleSelectorDisabled />
      </Usage>
      <Usage
        title="Disable First Item selected"
        description={
          <>
            <P className="text-muted-foreground">
              The first item selected is a default behavior by{' '}
              <PropLink href="https://github.com/pacocoursey/cmdk">
                <InlineCode>cmdk</InlineCode>
              </PropLink>{' '}
              and there is no way to control it. You can learn more about the{' '}
              <PropLink href="https://github.com/pacocoursey/cmdk/issues/171">
                <InlineCode>issue</InlineCode>
              </PropLink>
              .
            </P>
            <P className="text-muted-foreground">
              Here is a workaround solution: by adding a dummy item.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-no-default-select.tsx"
      >
        <MultipleSelectorNoDefaultSelect />
      </Usage>
      <Usage
        title="Controlled Component"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-controlled.tsx"
      >
        <MultipleSelectorControlled />
      </Usage>
      <Usage
        title="Creatable Selector"
        description={
          <P className="text-muted-foreground">Create option when there is no option matched.</P>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-creatable.tsx"
      >
        <MultipleSelectorCreatable />
      </Usage>
      <Usage
        title="Async Search with Debounce"
        description={
          <>
            <P className="text-muted-foreground">
              The async search is debounced by default. The delay time is 500ms if you do not
              provide it.
            </P>
            <P className="text-muted-foreground">
              You can provide <InlineCode>delay</InlineCode> to customize the time. The{' '}
              <InlineCode>delay</InlineCode> prop only works with <InlineCode>onSearch</InlineCode>.
            </P>
            <P className="text-muted-foreground">
              The empty text <b>will not</b> trigger the search. On the other hand, if the search
              had been triggered, and user delete all the texts, it will not trigger the search
              again and keep the current options with empty text.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-async-search.tsx"
      >
        <MultipleSelectorWithAsyncSearch />
      </Usage>
      <Usage
        title="Trigger Search on Focus"
        description={
          <>
            <P className="text-muted-foreground">
              Only works with <InlineCode>onSearch</InlineCode> prop. Trigger search when{' '}
              <InlineCode>onFocus</InlineCode>.
            </P>
            <P className="text-muted-foreground">
              For example, when user click on the input, it will trigger the search to get initial
              options.
            </P>
            <P className="text-muted-foreground">
              The empty text <b>will</b> trigger the search.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-async-search-and-onfocus.tsx"
      >
        <MultipleSelectorWithAsyncSearchAndOnFocus />
      </Usage>
      <Usage
        title="Async Search with Debounce and Creatable"
        description={
          <>
            <P className="text-muted-foreground">
              If you combine the async search and creatable, you can create option when there is no
              option matched.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-async-search-and-creatable.tsx"
      >
        <MultipleSelectorWithAsyncSearchAndCreatable />
      </Usage>
      <Usage
        title="Async Search and Creatable and Group"
        description={
          <>
            <P className="text-muted-foreground">
              If you combine the async search and creatable and group, you can still create option
              when there is no option matched.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-async-search-and-creatable-and-group.tsx"
      >
        <MultipleSelectorWithAsyncSearchAndCreatableAndGroup />
      </Usage>
      <Usage
        title="Manually Controlled Options"
        description={
          <>
            <P className="text-muted-foreground">
              If you want to controlled options yourself, you can provide{' '}
              <InlineCode>options</InlineCode> prop.
            </P>
            <P className="text-muted-foreground">
              Otherwise, <InlineCode>defaultOptions</InlineCode> is a better choice.
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-manually-controlled-options.tsx"
      >
        <MultipleSelectorManuallyControlledOptions />
      </Usage>
      <Usage
        title="Grouped"
        description={
          <>
            <P className="text-muted-foreground">
              Grouping options by specific key of <InlineCode>object</InlineCode>
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-group.tsx"
      >
        <MultipleSelectorWithGroup />
      </Usage>
      <Usage
        title="Maximum Selected Count"
        description={
          <P className="text-muted-foreground">
            Following example is set to 3. The default of max selected is{' '}
            <InlineCode>Number.MAX_SAFE_INTEGER</InlineCode>
          </P>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-max-selected.tsx"
      >
        <MultipleSelectorWithMaxSelected />
      </Usage>
      <Usage
        title="Maximum Text Length"
        description={<P className="text-muted-foreground">Following example is set to 5.</P>}
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-max-text-length.tsx"
      >
        <MultipleSelectorMaxTextLength />
      </Usage>
      <Usage
        title="Hide Placeholder When Selected"
        description={
          <>
            <P className="text-muted-foreground">
              If you would like to work as a normal input that hide the placeholder when there are
              options selected.
            </P>
            <P className="text-muted-foreground">
              Just set <InlineCode>hidePlaceholderWhenSelected</InlineCode> to{' '}
              <InlineCode>true</InlineCode>
            </P>
          </>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-no-placeholder-when-selected.tsx"
      >
        <MultipleSelectorNoPlaceholderWhenSelected />
      </Usage>
      <Usage
        title="Fixed Options"
        description={
          <P className="text-muted-foreground">
            Provide <InlineCode>fixed: true</InlineCode> in your <InlineCode>value</InlineCode>
          </P>
        }
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-fixed-option.tsx"
      >
        <MultipleSelectorWithFixedOption />
      </Usage>
      <Usage title="ref" path="app/(docs)/docs//multiple-selector/usage/multiple-selector-ref.tsx">
        <MultipleSelectorRef />
      </Usage>
      <Usage
        title="CommandProps and CommandInputProps Customization"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-commandprops.tsx"
      >
        <MultipleSelectorCommandProps />
      </Usage>
      <Usage
        title="Form"
        path="app/(docs)/docs//multiple-selector/usage/multiple-selector-with-form.tsx"
      >
        <MultipleSelectorWithForm />
      </Usage>

      <PropsTable props={multipleSelectorProp} />
    </PageTemplate>
  );
};

export default MultipleSelectorPage;
