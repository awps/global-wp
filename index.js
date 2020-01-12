/*
 The script used to generate this file is:
 ```
let wwp = ''

Object.keys(wp).forEach(parent => {
    wwp += `${parent}: {`
    Object.keys(wp[parent]).forEach(child => {
        wwp += `${child}: () => l(),\n`
    })
    wwp += `},\n`
})


console.log(wwp);

 ```
 */
const l = () => throw new Error('Global "window.wp" object does not exists!')

if (!window.wp) {
    wp = {
        hooks: {
            addAction: () => l(),
            addFilter: () => l(),
            removeAction: () => l(),
            removeFilter: () => l(),
            hasAction: () => l(),
            hasFilter: () => l(),
            removeAllActions: () => l(),
            removeAllFilters: () => l(),
            doAction: () => l(),
            applyFilters: () => l(),
            currentAction: () => l(),
            currentFilter: () => l(),
            doingAction: () => l(),
            doingFilter: () => l(),
            didAction: () => l(),
            didFilter: () => l(),
            actions: () => l(),
            filters: () => l(),
            createHooks: () => l(),
        },
        heartbeat: {
            hasFocus: () => l(),
            connectNow: () => l(),
            disableSuspend: () => l(),
            interval: () => l(),
            hasConnectionError: () => l(),
            enqueue: () => l(),
            dequeue: () => l(),
            isQueued: () => l(),
            getQueuedItem: () => l(),
        },
        template: {
            cache: () => l(),
        },
        ajax: {
            settings: () => l(),
            post: () => l(),
            send: () => l(),
        },
        Backbone: {
            Subviews: () => l(),
            View: () => l(),
        },
        media: {
            model: () => l(),
            view: () => l(),
            controller: () => l(),
            frames: () => l(),
            compare: () => l(),
            template: () => l(),
            post: () => l(),
            ajax: () => l(),
            fit: () => l(),
            truncate: () => l(),
            attachment: () => l(),
            query: () => l(),
            isTouchDevice: () => l(),
            events: () => l(),
            transition: () => l(),
            selectionSync: () => l(),
            View: () => l(),
            coerce: () => l(),
            string: () => l(),
            embed: () => l(),
            collection: () => l(),
            _galleryDefaults: () => l(),
            galleryDefaults: () => l(),
            gallery: () => l(),
            featuredImage: () => l(),
            editor: () => l(),
            mixin: () => l(),
            playlist: () => l(),
            audio: () => l(),
            video: () => l(),
        },
        Uploader: {
            defaults: () => l(),
            browser: () => l(),
            limitExceeded: () => l(),
            uuid: () => l(),
            errorMap: () => l(),
            queue: () => l(),
            errors: () => l(),
        },
        mediaelement: {
            initialize: () => l(),
        },
        apiRequest: {
            buildAjaxOptions: () => l(),
            transport: () => l(),
        },
        domReady: {},
        a11y: {
            setup: () => l(),
            speak: () => l(),
        },
        i18n: {
            setLocaleData: () => l(),
            __: () => l(),
            _x: () => l(),
            _n: () => l(),
            _nx: () => l(),
            sprintf: () => l(),
        },
        url: {
            isURL: () => l(),
            isEmail: () => l(),
            getProtocol: () => l(),
            isValidProtocol: () => l(),
            getAuthority: () => l(),
            isValidAuthority: () => l(),
            getPath: () => l(),
            isValidPath: () => l(),
            getQueryString: () => l(),
            isValidQueryString: () => l(),
            getFragment: () => l(),
            isValidFragment: () => l(),
            addQueryArgs: () => l(),
            getQueryArg: () => l(),
            hasQueryArg: () => l(),
            removeQueryArgs: () => l(),
            prependHTTP: () => l(),
            safeDecodeURI: () => l(),
            filterURLForDisplay: () => l(),
            safeDecodeURIComponent: () => l(),
        },
        apiFetch: {
            use: () => l(),
            setFetchHandler: () => l(),
            createNonceMiddleware: () => l(),
            createPreloadingMiddleware: () => l(),
            createRootURLMiddleware: () => l(),
            fetchAllMiddleware: () => l(),
            mediaUploadMiddleware: () => l(),
            nonceMiddleware: () => l(),
            nonceEndpoint: () => l(),
        },
        blob: {
            createBlobURL: () => l(),
            getBlobByURL: () => l(),
            revokeBlobURL: () => l(),
            isBlobURL: () => l(),
        },
        autop: {
            autop: () => l(),
            removep: () => l(),
        },
        blockSerializationDefaultParser: {
            parse: () => l(),
        },
        escapeHtml: {
            escapeAmpersand: () => l(),
            escapeQuotationMark: () => l(),
            escapeLessThan: () => l(),
            escapeAttribute: () => l(),
            escapeHTML: () => l(),
            isValidAttributeName: () => l(),
        },
        element: {
            Children: () => l(),
            cloneElement: () => l(),
            Component: () => l(),
            createContext: () => l(),
            createElement: () => l(),
            createRef: () => l(),
            forwardRef: () => l(),
            Fragment: () => l(),
            isValidElement: () => l(),
            memo: () => l(),
            StrictMode: () => l(),
            useCallback: () => l(),
            useContext: () => l(),
            useDebugValue: () => l(),
            useEffect: () => l(),
            useImperativeHandle: () => l(),
            useLayoutEffect: () => l(),
            useMemo: () => l(),
            useReducer: () => l(),
            useRef: () => l(),
            useState: () => l(),
            lazy: () => l(),
            Suspense: () => l(),
            concatChildren: () => l(),
            switchChildrenNodeName: () => l(),
            createPortal: () => l(),
            findDOMNode: () => l(),
            render: () => l(),
            unmountComponentAtNode: () => l(),
            isEmptyElement: () => l(),
            renderToString: () => l(),
            RawHTML: () => l(),
        },
        isShallowEqual: {
            isShallowEqualObjects: () => l(),
            isShallowEqualArrays: () => l(),
        },
        compose: {
            createHigherOrderComponent: () => l(),
            compose: () => l(),
            ifCondition: () => l(),
            pure: () => l(),
            withGlobalEvents: () => l(),
            withInstanceId: () => l(),
            withSafeTimeout: () => l(),
            withState: () => l(),
            useMediaQuery: () => l(),
            useReducedMotion: () => l(),
        },
        deprecated: {},
        priorityQueue: {
            createQueue: () => l(),
        },
        reduxRoutine: {},
        data: {
            select: () => l(),
            dispatch: () => l(),
            subscribe: () => l(),
            registerGenericStore: () => l(),
            registerStore: () => l(),
            use: () => l(),
            withSelect: () => l(),
            withDispatch: () => l(),
            withRegistry: () => l(),
            RegistryProvider: () => l(),
            RegistryConsumer: () => l(),
            useRegistry: () => l(),
            useSelect: () => l(),
            useDispatch: () => l(),
            __experimentalAsyncModeProvider: () => l(),
            createRegistry: () => l(),
            createRegistrySelector: () => l(),
            createRegistryControl: () => l(),
            plugins: () => l(),
            combineReducers: () => l(),
        },
        dom: {
            focus: () => l(),
            isHorizontalEdge: () => l(),
            isVerticalEdge: () => l(),
            getRectangleFromRange: () => l(),
            computeCaretRect: () => l(),
            placeCaretAtHorizontalEdge: () => l(),
            placeCaretAtVerticalEdge: () => l(),
            isTextField: () => l(),
            documentHasSelection: () => l(),
            isEntirelySelected: () => l(),
            getScrollContainer: () => l(),
            getOffsetParent: () => l(),
            replace: () => l(),
            remove: () => l(),
            insertAfter: () => l(),
            unwrap: () => l(),
            replaceTag: () => l(),
            wrap: () => l(),
        },
        htmlEntities: {
            decodeEntities: () => l(),
        },
        shortcode: {
            next: () => l(),
            replace: () => l(),
            string: () => l(),
            regexp: () => l(),
            attrs: () => l(),
            fromMatch: () => l(),
        },
        blocks: {
            createBlock: () => l(),
            cloneBlock: () => l(),
            getPossibleBlockTransformations: () => l(),
            switchToBlockType: () => l(),
            getBlockTransforms: () => l(),
            findTransform: () => l(),
            getBlockFromExample: () => l(),
            parse: () => l(),
            getBlockAttributes: () => l(),
            parseWithAttributeSchema: () => l(),
            pasteHandler: () => l(),
            rawHandler: () => l(),
            getPhrasingContentSchema: () => l(),
            serialize: () => l(),
            getBlockContent: () => l(),
            getBlockDefaultClassName: () => l(),
            getBlockMenuDefaultClassName: () => l(),
            getSaveElement: () => l(),
            getSaveContent: () => l(),
            isValidBlockContent: () => l(),
            getCategories: () => l(),
            setCategories: () => l(),
            updateCategory: () => l(),
            registerBlockType: () => l(),
            unregisterBlockType: () => l(),
            setFreeformContentHandlerName: () => l(),
            getFreeformContentHandlerName: () => l(),
            setUnregisteredTypeHandlerName: () => l(),
            getUnregisteredTypeHandlerName: () => l(),
            setDefaultBlockName: () => l(),
            getDefaultBlockName: () => l(),
            setGroupingBlockName: () => l(),
            getGroupingBlockName: () => l(),
            getBlockType: () => l(),
            getBlockTypes: () => l(),
            getBlockSupport: () => l(),
            hasBlockSupport: () => l(),
            isReusableBlock: () => l(),
            getChildBlockNames: () => l(),
            hasChildBlocks: () => l(),
            hasChildBlocksWithInserterSupport: () => l(),
            unstable__bootstrapServerSideBlockDefinitions: () => l(),
            registerBlockStyle: () => l(),
            unregisterBlockStyle: () => l(),
            isUnmodifiedDefaultBlock: () => l(),
            normalizeIconObject: () => l(),
            isValidIcon: () => l(),
            doBlocksMatchTemplate: () => l(),
            synchronizeBlocksWithTemplate: () => l(),
            children: () => l(),
            node: () => l(),
            withBlockContentContext: () => l(),
        },
        keycodes: {
            BACKSPACE: () => l(),
            TAB: () => l(),
            ENTER: () => l(),
            ESCAPE: () => l(),
            SPACE: () => l(),
            LEFT: () => l(),
            UP: () => l(),
            RIGHT: () => l(),
            DOWN: () => l(),
            DELETE: () => l(),
            F10: () => l(),
            ALT: () => l(),
            CTRL: () => l(),
            COMMAND: () => l(),
            SHIFT: () => l(),
            modifiers: () => l(),
            rawShortcut: () => l(),
            displayShortcutList: () => l(),
            displayShortcut: () => l(),
            shortcutAriaLabel: () => l(),
            isKeyboardEvent: () => l(),
        },
        richText: {
            applyFormat: () => l(),
            concat: () => l(),
            create: () => l(),
            getActiveFormat: () => l(),
            getActiveObject: () => l(),
            getTextContent: () => l(),
            __unstableIsListRootSelected: () => l(),
            __unstableIsActiveListType: () => l(),
            isCollapsed: () => l(),
            isEmpty: () => l(),
            __unstableIsEmptyLine: () => l(),
            join: () => l(),
            registerFormatType: () => l(),
            removeFormat: () => l(),
            remove: () => l(),
            replace: () => l(),
            insert: () => l(),
            __unstableInsertLineSeparator: () => l(),
            __unstableRemoveLineSeparator: () => l(),
            insertObject: () => l(),
            slice: () => l(),
            split: () => l(),
            __unstableToDom: () => l(),
            toHTMLString: () => l(),
            toggleFormat: () => l(),
            __UNSTABLE_LINE_SEPARATOR: () => l(),
            unregisterFormatType: () => l(),
            __unstableIndentListItems: () => l(),
            __unstableOutdentListItems: () => l(),
            __unstableChangeListType: () => l(),
            __unstableCreateElement: () => l(),
            __experimentalRichText: () => l(),
            __unstableFormatEdit: () => l(),
        },
        components: {
            Circle: () => l(),
            G: () => l(),
            Path: () => l(),
            Polygon: () => l(),
            Rect: () => l(),
            SVG: () => l(),
            HorizontalRule: () => l(),
            BlockQuotation: () => l(),
            Animate: () => l(),
            Autocomplete: () => l(),
            BaseControl: () => l(),
            Button: () => l(),
            ButtonGroup: () => l(),
            CheckboxControl: () => l(),
            ClipboardButton: () => l(),
            ColorIndicator: () => l(),
            ColorPalette: () => l(),
            ColorPicker: () => l(),
            Dashicon: () => l(),
            DateTimePicker: () => l(),
            DatePicker: () => l(),
            TimePicker: () => l(),
            Disabled: () => l(),
            Draggable: () => l(),
            DropZone: () => l(),
            DropZoneProvider: () => l(),
            Dropdown: () => l(),
            DropdownMenu: () => l(),
            ExternalLink: () => l(),
            FocalPointPicker: () => l(),
            FocusableIframe: () => l(),
            FontSizePicker: () => l(),
            FormFileUpload: () => l(),
            FormToggle: () => l(),
            FormTokenField: () => l(),
            Icon: () => l(),
            IconButton: () => l(),
            KeyboardShortcuts: () => l(),
            MenuGroup: () => l(),
            MenuItem: () => l(),
            MenuItemsChoice: () => l(),
            Modal: () => l(),
            ScrollLock: () => l(),
            NavigableMenu: () => l(),
            TabbableContainer: () => l(),
            Notice: () => l(),
            NoticeList: () => l(),
            Panel: () => l(),
            PanelBody: () => l(),
            PanelHeader: () => l(),
            PanelRow: () => l(),
            Placeholder: () => l(),
            Popover: () => l(),
            QueryControls: () => l(),
            RadioControl: () => l(),
            RangeControl: () => l(),
            ResizableBox: () => l(),
            ResponsiveWrapper: () => l(),
            SandBox: () => l(),
            SelectControl: () => l(),
            Snackbar: () => l(),
            SnackbarList: () => l(),
            Spinner: () => l(),
            TabPanel: () => l(),
            TextControl: () => l(),
            TextareaControl: () => l(),
            Tip: () => l(),
            ToggleControl: () => l(),
            Toolbar: () => l(),
            ToolbarButton: () => l(),
            Tooltip: () => l(),
            TreeSelect: () => l(),
            IsolatedEventContainer: () => l(),
            createSlotFill: () => l(),
            Slot: () => l(),
            Fill: () => l(),
            SlotFillProvider: () => l(),
            navigateRegions: () => l(),
            withConstrainedTabbing: () => l(),
            withFallbackStyles: () => l(),
            withFilters: () => l(),
            withFocusOutside: () => l(),
            withFocusReturn: () => l(),
            FocusReturnProvider: () => l(),
            withNotices: () => l(),
            withSpokenMessages: () => l(),
            ServerSideRender: () => l(),
        },
        tokenList: {},
        viewport: {
            ifViewportMatches: () => l(),
            withViewportMatch: () => l(),
        },
        wordcount: {
            count: () => l(),
        },
        blockEditor: {
            AlignmentToolbar: () => l(),
            Autocomplete: () => l(),
            BlockAlignmentToolbar: () => l(),
            BlockControls: () => l(),
            BlockEdit: () => l(),
            BlockFormatControls: () => l(),
            BlockIcon: () => l(),
            BlockNavigationDropdown: () => l(),
            __experimentalBlockNavigationList: () => l(),
            BlockVerticalAlignmentToolbar: () => l(),
            ButtonBlockerAppender: () => l(),
            ColorPalette: () => l(),
            ContrastChecker: () => l(),
            InnerBlocks: () => l(),
            InspectorAdvancedControls: () => l(),
            InspectorControls: () => l(),
            MediaPlaceholder: () => l(),
            MediaUpload: () => l(),
            MediaUploadCheck: () => l(),
            PanelColorSettings: () => l(),
            PlainText: () => l(),
            RichText: () => l(),
            RichTextShortcut: () => l(),
            RichTextToolbarButton: () => l(),
            __unstableRichTextInputEvent: () => l(),
            URLInput: () => l(),
            URLInputButton: () => l(),
            URLPopover: () => l(),
            withColorContext: () => l(),
            __experimentalBlockSettingsMenuFirstItem: () => l(),
            __experimentalBlockSettingsMenuPluginsExtension: () => l(),
            __experimentalInserterMenuExtension: () => l(),
            BlockEditorKeyboardShortcuts: () => l(),
            BlockInspector: () => l(),
            BlockList: () => l(),
            BlockMover: () => l(),
            BlockPreview: () => l(),
            BlockSelectionClearer: () => l(),
            BlockSettingsMenu: () => l(),
            BlockTitle: () => l(),
            BlockToolbar: () => l(),
            CopyHandler: () => l(),
            DefaultBlockAppender: () => l(),
            Inserter: () => l(),
            MultiBlocksSwitcher: () => l(),
            MultiSelectScrollIntoView: () => l(),
            NavigableToolbar: () => l(),
            ObserveTyping: () => l(),
            PreserveScrollInReorder: () => l(),
            SkipToSelectedBlock: () => l(),
            Typewriter: () => l(),
            Warning: () => l(),
            WritingFlow: () => l(),
            BlockEditorProvider: () => l(),
            getColorClassName: () => l(),
            getColorObjectByAttributeValues: () => l(),
            getColorObjectByColorValue: () => l(),
            createCustomColorsHOC: () => l(),
            withColors: () => l(),
            getFontSize: () => l(),
            getFontSizeClass: () => l(),
            FontSizePicker: () => l(),
            withFontSizes: () => l(),
            transformStyles: () => l(),
            storeConfig: () => l(),
            SETTINGS_DEFAULTS: () => l(),
        },
        editor: {
            AutosaveMonitor: () => l(),
            DocumentOutline: () => l(),
            DocumentOutlineCheck: () => l(),
            VisualEditorGlobalKeyboardShortcuts: () => l(),
            EditorGlobalKeyboardShortcuts: () => l(),
            TextEditorGlobalKeyboardShortcuts: () => l(),
            EditorHistoryRedo: () => l(),
            EditorHistoryUndo: () => l(),
            EditorNotices: () => l(),
            ErrorBoundary: () => l(),
            LocalAutosaveMonitor: () => l(),
            PageAttributesCheck: () => l(),
            PageAttributesOrder: () => l(),
            PageAttributesParent: () => l(),
            PageTemplate: () => l(),
            PostAuthor: () => l(),
            PostAuthorCheck: () => l(),
            PostComments: () => l(),
            PostExcerpt: () => l(),
            PostExcerptCheck: () => l(),
            PostFeaturedImage: () => l(),
            PostFeaturedImageCheck: () => l(),
            PostFormat: () => l(),
            PostFormatCheck: () => l(),
            PostLastRevision: () => l(),
            PostLastRevisionCheck: () => l(),
            PostLockedModal: () => l(),
            PostPendingStatus: () => l(),
            PostPendingStatusCheck: () => l(),
            PostPingbacks: () => l(),
            PostPreviewButton: () => l(),
            PostPublishButton: () => l(),
            PostPublishButtonLabel: () => l(),
            PostPublishPanel: () => l(),
            PostSavedState: () => l(),
            PostSchedule: () => l(),
            PostScheduleCheck: () => l(),
            PostScheduleLabel: () => l(),
            PostSticky: () => l(),
            PostStickyCheck: () => l(),
            PostSwitchToDraftButton: () => l(),
            PostTaxonomies: () => l(),
            PostTaxonomiesCheck: () => l(),
            PostTextEditor: () => l(),
            PostTitle: () => l(),
            PostTrash: () => l(),
            PostTrashCheck: () => l(),
            PostTypeSupportCheck: () => l(),
            PostVisibility: () => l(),
            PostVisibilityLabel: () => l(),
            PostVisibilityCheck: () => l(),
            TableOfContents: () => l(),
            UnsavedChangesWarning: () => l(),
            WordCount: () => l(),
            EditorProvider: () => l(),
            blockAutocompleter: () => l(),
            userAutocompleter: () => l(),
            ServerSideRender: () => l(),
            RichText: () => l(),
            Autocomplete: () => l(),
            AlignmentToolbar: () => l(),
            BlockAlignmentToolbar: () => l(),
            BlockControls: () => l(),
            BlockEdit: () => l(),
            BlockEditorKeyboardShortcuts: () => l(),
            BlockFormatControls: () => l(),
            BlockIcon: () => l(),
            BlockInspector: () => l(),
            BlockList: () => l(),
            BlockMover: () => l(),
            BlockNavigationDropdown: () => l(),
            BlockSelectionClearer: () => l(),
            BlockSettingsMenu: () => l(),
            BlockTitle: () => l(),
            BlockToolbar: () => l(),
            ColorPalette: () => l(),
            ContrastChecker: () => l(),
            CopyHandler: () => l(),
            DefaultBlockAppender: () => l(),
            FontSizePicker: () => l(),
            Inserter: () => l(),
            InnerBlocks: () => l(),
            InspectorAdvancedControls: () => l(),
            InspectorControls: () => l(),
            PanelColorSettings: () => l(),
            PlainText: () => l(),
            RichTextShortcut: () => l(),
            RichTextToolbarButton: () => l(),
            __unstableRichTextInputEvent: () => l(),
            MediaPlaceholder: () => l(),
            MediaUpload: () => l(),
            MediaUploadCheck: () => l(),
            MultiBlocksSwitcher: () => l(),
            MultiSelectScrollIntoView: () => l(),
            NavigableToolbar: () => l(),
            ObserveTyping: () => l(),
            PreserveScrollInReorder: () => l(),
            SkipToSelectedBlock: () => l(),
            URLInput: () => l(),
            URLInputButton: () => l(),
            URLPopover: () => l(),
            Warning: () => l(),
            WritingFlow: () => l(),
            createCustomColorsHOC: () => l(),
            getColorClassName: () => l(),
            getColorObjectByAttributeValues: () => l(),
            getColorObjectByColorValue: () => l(),
            getFontSize: () => l(),
            getFontSizeClass: () => l(),
            withColorContext: () => l(),
            withColors: () => l(),
            withFontSizes: () => l(),
            mediaUpload: () => l(),
            cleanForSlug: () => l(),
            storeConfig: () => l(),
            transformStyles: () => l(),
        },
        oldEditor: {
            autop: () => l(),
            removep: () => l(),
            initialize: () => l(),
            remove: () => l(),
            getContent: () => l(),
        },
        coreData: {},
        date: {
            setSettings: () => l(),
            __experimentalGetSettings: () => l(),
            format: () => l(),
            date: () => l(),
            gmdate: () => l(),
            dateI18n: () => l(),
            isInTheFuture: () => l(),
            getDate: () => l(),
        },
        dataControls: {
            apiFetch: () => l(),
            select: () => l(),
            dispatch: () => l(),
            controls: () => l(),
        },
        mediaUtils: {
            MediaUpload: () => l(),
            uploadMedia: () => l(),
        },
        notices: {},
        nux: {
            DotTip: () => l(),
        },
        serverSideRender: {
            displayName: () => l(),
        },
        blockLibrary: {
            registerCoreBlocks: () => l(),
            __experimentalRegisterExperimentalCoreBlocks: () => l(),
        },
        plugins: {
            PluginArea: () => l(),
            withPluginContext: () => l(),
            registerPlugin: () => l(),
            unregisterPlugin: () => l(),
            getPlugin: () => l(),
            getPlugins: () => l(),
        },
        editPost: {
            reinitializeEditor: () => l(),
            initializeEditor: () => l(),
            PluginBlockSettingsMenuItem: () => l(),
            PluginDocumentSettingPanel: () => l(),
            PluginMoreMenuItem: () => l(),
            PluginPostPublishPanel: () => l(),
            PluginPostStatusInfo: () => l(),
            PluginPrePublishPanel: () => l(),
            PluginSidebar: () => l(),
            PluginSidebarMoreMenuItem: () => l(),
        },
        formatLibrary: {},
        html: {
            attrs: () => l(),
            string: () => l(),
        },
        mce: {
            views: () => l(),
            View: () => l(),
        },
    }
}
