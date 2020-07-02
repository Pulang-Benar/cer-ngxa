/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COSMIC_THEME as baseTheme } from '@nebular/theme';
/** @type {?} */
var baseThemeVariables = baseTheme.variables;
/** @type {?} */
export var COSMIC_THEME = (/** @type {?} */ ({
    name: 'cosmic',
    base: 'cosmic',
    variables: {
        temperature: {
            arcFill: ['#2ec7fe', '#31ffad', '#7bff24', '#fff024', '#f7bd59'],
            arcEmpty: baseThemeVariables.bg2,
            thumbBg: '#ffffff',
            thumbBorder: '#ffffff',
        },
        solar: {
            gradientLeft: baseThemeVariables.primary,
            gradientRight: baseThemeVariables.primary,
            shadowColor: 'rgba(0, 0, 0, 0)',
            secondSeriesFill: baseThemeVariables.bg2,
            radius: ['70%', '90%'],
        },
        traffic: {
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(50, 50, 89); border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            yAxisSplitLine: baseThemeVariables.separator,
            lineBg: baseThemeVariables.border2,
            lineShadowBlur: '14',
            itemColor: baseThemeVariables.border2,
            itemBorderColor: baseThemeVariables.border2,
            itemEmphasisBorderColor: baseThemeVariables.primary,
            shadowLineDarkBg: baseThemeVariables.border3,
            shadowLineShadow: baseThemeVariables.border3,
            gradFrom: baseThemeVariables.bg,
            gradTo: baseThemeVariables.bg2,
        },
        electricity: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: baseThemeVariables.fgText,
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            axisLineColor: baseThemeVariables.border3,
            xAxisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.border2,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: baseThemeVariables.success,
            lineGradTo: baseThemeVariables.warning,
            lineShadow: baseThemeVariables.bg4,
            areaGradFrom: baseThemeVariables.bg2,
            areaGradTo: baseThemeVariables.bg3,
            shadowLineDarkBg: baseThemeVariables.bg3,
        },
        bubbleMap: {
            titleColor: baseThemeVariables.fgText,
            areaColor: baseThemeVariables.bg4,
            areaHoverColor: baseThemeVariables.fgHighlight,
            areaBorderColor: baseThemeVariables.border5,
        },
        profitBarAnimationEchart: {
            textColor: baseThemeVariables.fgText,
            firstAnimationBarColor: baseThemeVariables.primary,
            secondAnimationBarColor: baseThemeVariables.success,
            splitLineStyleOpacity: '1',
            splitLineStyleWidth: '1',
            splitLineStyleColor: baseThemeVariables.border2,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
        trafficBarEchart: {
            gradientFrom: baseThemeVariables.warningLight,
            gradientTo: baseThemeVariables.warning,
            shadow: baseThemeVariables.warningLight,
            shadowBlur: '5',
            axisTextColor: baseThemeVariables.fgText,
            axisFontSize: '12',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
        },
        countryOrders: {
            countryBorderColor: baseThemeVariables.border4,
            countryFillColor: baseThemeVariables.bg3,
            countryBorderWidth: '1',
            hoveredCountryBorderColor: baseThemeVariables.primary,
            hoveredCountryFillColor: baseThemeVariables.primaryLight,
            hoveredCountryBorderWidth: '1',
            chartAxisLineColor: baseThemeVariables.border4,
            chartAxisTextColor: baseThemeVariables.fg,
            chartAxisFontSize: '16',
            chartGradientTo: baseThemeVariables.primary,
            chartGradientFrom: baseThemeVariables.primaryLight,
            chartAxisSplitLine: baseThemeVariables.separator,
            chartShadowLineColor: baseThemeVariables.primaryLight,
            chartLineBottomShadowColor: baseThemeVariables.primary,
            chartInnerLineColor: baseThemeVariables.bg2,
        },
        echarts: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.fgText,
            splitLineColor: baseThemeVariables.separator,
            itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
            tooltipBackgroundColor: baseThemeVariables.primary,
            areaOpacity: '1',
        },
        chartjs: {
            axisLineColor: baseThemeVariables.separator,
            textColor: baseThemeVariables.fgText,
        },
        orders: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '0',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'solid',
            lineWidth: '4',
            // first line
            firstAreaGradFrom: baseThemeVariables.bg2,
            firstAreaGradTo: baseThemeVariables.bg2,
            firstShadowLineDarkBg: baseThemeVariables.bg2,
            // second line
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondAreaGradFrom: 'rgba(161, 110, 255, 0.8)',
            secondAreaGradTo: 'rgba(161, 110, 255, 0.5)',
            secondShadowLineDarkBg: baseThemeVariables.primary,
            // third line
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdAreaGradFrom: 'rgba(0, 214, 143, 0.7)',
            thirdAreaGradTo: 'rgba(0, 214, 143, 0.4)',
            thirdShadowLineDarkBg: baseThemeVariables.success,
        },
        profit: {
            bg: baseThemeVariables.bg,
            textColor: baseThemeVariables.fgText,
            axisLineColor: baseThemeVariables.border4,
            splitLineColor: baseThemeVariables.separator,
            areaOpacity: '1',
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            // first bar
            firstLineGradFrom: baseThemeVariables.bg2,
            firstLineGradTo: baseThemeVariables.bg2,
            firstLineShadow: 'rgba(0, 0, 0, 0)',
            // second bar
            secondLineGradFrom: baseThemeVariables.primary,
            secondLineGradTo: baseThemeVariables.primary,
            secondLineShadow: 'rgba(0, 0, 0, 0)',
            // third bar
            thirdLineGradFrom: baseThemeVariables.success,
            thirdLineGradTo: baseThemeVariables.successLight,
            thirdLineShadow: 'rgba(0, 0, 0, 0)',
        },
        orderProfitLegend: {
            firstItem: baseThemeVariables.success,
            secondItem: baseThemeVariables.primary,
            thirdItem: baseThemeVariables.bg2,
        },
        visitors: {
            tooltipBg: baseThemeVariables.bg,
            tooltipLineColor: 'rgba(0, 0, 0, 0)',
            tooltipLineWidth: '1',
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '20',
            axisLineColor: baseThemeVariables.border4,
            axisFontSize: '16',
            axisTextColor: baseThemeVariables.fg,
            yAxisSplitLine: baseThemeVariables.separator,
            itemBorderColor: baseThemeVariables.primary,
            lineStyle: 'dotted',
            lineWidth: '6',
            lineGradFrom: '#ffffff',
            lineGradTo: '#ffffff',
            lineShadow: 'rgba(0, 0, 0, 0)',
            areaGradFrom: baseThemeVariables.primary,
            areaGradTo: baseThemeVariables.primaryLight,
            innerLineStyle: 'solid',
            innerLineWidth: '1',
            innerAreaGradFrom: baseThemeVariables.success,
            innerAreaGradTo: baseThemeVariables.success,
        },
        visitorsLegend: {
            firstIcon: baseThemeVariables.success,
            secondIcon: baseThemeVariables.primary,
        },
        visitorsPie: {
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.successLight,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            firstPieRadius: ['70%', '90%'],
            secondPieGradientLeft: baseThemeVariables.warning,
            secondPieGradientRight: baseThemeVariables.warningLight,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieRadius: ['60%', '95%'],
            shadowOffsetX: '0',
            shadowOffsetY: '3',
        },
        visitorsPieLegend: {
            firstSection: baseThemeVariables.warning,
            secondSection: baseThemeVariables.success,
        },
        earningPie: {
            radius: ['65%', '100%'],
            center: ['50%', '50%'],
            fontSize: '22',
            firstPieGradientLeft: baseThemeVariables.success,
            firstPieGradientRight: baseThemeVariables.success,
            firstPieShadowColor: 'rgba(0, 0, 0, 0)',
            secondPieGradientLeft: baseThemeVariables.primary,
            secondPieGradientRight: baseThemeVariables.primary,
            secondPieShadowColor: 'rgba(0, 0, 0, 0)',
            thirdPieGradientLeft: baseThemeVariables.warning,
            thirdPieGradientRight: baseThemeVariables.warning,
            thirdPieShadowColor: 'rgba(0, 0, 0, 0)',
        },
        earningLine: {
            gradFrom: baseThemeVariables.primary,
            gradTo: baseThemeVariables.primary,
            tooltipTextColor: baseThemeVariables.fgText,
            tooltipFontWeight: 'normal',
            tooltipFontSize: '16',
            tooltipBg: baseThemeVariables.bg,
            tooltipBorderColor: baseThemeVariables.border2,
            tooltipBorderWidth: '1',
            tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
        },
    },
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUuY29zbWljLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zdHlsZXMvdGhlbWUuY29zbWljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQW9CLFlBQVksSUFBSSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFdkUsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFNBQVM7O0FBRTlDLE1BQU0sS0FBTyxZQUFZLEdBQUcsbUJBQUE7SUFDMUIsSUFBSSxFQUFFLFFBQVE7SUFDZCxJQUFJLEVBQUUsUUFBUTtJQUNkLFNBQVMsRUFBRTtRQUNULFdBQVcsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUU7WUFDbEUsUUFBUSxFQUFFLGtCQUFrQixDQUFDLEdBQUc7WUFDaEMsT0FBTyxFQUFFLFNBQVM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7U0FDdkI7UUFFRCxLQUFLLEVBQUU7WUFDTCxZQUFZLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUN4QyxhQUFhLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUN6QyxXQUFXLEVBQUUsa0JBQWtCO1lBQy9CLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLEdBQUc7WUFDeEMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUN2QjtRQUVELE9BQU8sRUFBRTtZQUNQLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFO1lBQ2hDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDOUMsZUFBZSxFQUFFLHNGQUFzRjtZQUN2RyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNO1lBQzNDLGlCQUFpQixFQUFFLFFBQVE7WUFFM0IsY0FBYyxFQUFFLGtCQUFrQixDQUFDLFNBQVM7WUFFNUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLE9B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RCxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQ2pELG1CQUFtQixFQUFFLGtCQUFrQjtZQUV2QyxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FBQyxPQUFPO1lBQ2pELHNCQUFzQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDbEQsb0JBQW9CLEVBQUUsa0JBQWtCO1lBRXhDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLE9BQU87WUFDaEQscUJBQXFCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNqRCxtQkFBbUIsRUFBRSxrQkFBa0I7U0FDeEM7UUFFRCxXQUFXLEVBQUU7WUFDWCxRQUFRLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUNwQyxNQUFNLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUVsQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxNQUFNO1lBQzNDLGlCQUFpQixFQUFFLFFBQVE7WUFDM0IsZUFBZSxFQUFFLElBQUk7WUFDckIsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEVBQUU7WUFDaEMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsT0FBTztZQUM5QyxrQkFBa0IsRUFBRSxHQUFHO1lBQ3ZCLGVBQWUsRUFBRSx5Q0FBeUM7U0FDM0Q7S0FDRjtDQUNGLEVBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmJKU1RoZW1lT3B0aW9ucywgQ09TTUlDX1RIRU1FIGFzIGJhc2VUaGVtZSB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuY29uc3QgYmFzZVRoZW1lVmFyaWFibGVzID0gYmFzZVRoZW1lLnZhcmlhYmxlcztcblxuZXhwb3J0IGNvbnN0IENPU01JQ19USEVNRSA9IHtcbiAgbmFtZTogJ2Nvc21pYycsXG4gIGJhc2U6ICdjb3NtaWMnLFxuICB2YXJpYWJsZXM6IHtcbiAgICB0ZW1wZXJhdHVyZToge1xuICAgICAgYXJjRmlsbDogWyAnIzJlYzdmZScsICcjMzFmZmFkJywgJyM3YmZmMjQnLCAnI2ZmZjAyNCcsICcjZjdiZDU5JyBdLFxuICAgICAgYXJjRW1wdHk6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICB0aHVtYkJnOiAnI2ZmZmZmZicsXG4gICAgICB0aHVtYkJvcmRlcjogJyNmZmZmZmYnLFxuICAgIH0sXG5cbiAgICBzb2xhcjoge1xuICAgICAgZ3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIGdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIHNlY29uZFNlcmllc0ZpbGw6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICByYWRpdXM6IFsnNzAlJywgJzkwJSddLFxuICAgIH0sXG5cbiAgICB0cmFmZmljOiB7XG4gICAgICB0b29sdGlwQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcbiAgICAgIHRvb2x0aXBCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3gtc2hhZG93OiAwcHggMnB4IDQ2cHggMCByZ2JhKDUwLCA1MCwgODkpOyBib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA0cHggMTZweDsnLFxuICAgICAgdG9vbHRpcFRleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIHRvb2x0aXBGb250V2VpZ2h0OiAnbm9ybWFsJyxcblxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG5cbiAgICAgIGxpbmVCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXG4gICAgICBsaW5lU2hhZG93Qmx1cjogJzE0JyxcbiAgICAgIGl0ZW1Db2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXG4gICAgICBpdGVtQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgaXRlbUVtcGhhc2lzQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2hhZG93TGluZURhcmtCZzogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjMsXG4gICAgICBzaGFkb3dMaW5lU2hhZG93OiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMyxcbiAgICAgIGdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICBncmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgfSxcblxuICAgIGVsZWN0cmljaXR5OiB7XG4gICAgICB0b29sdGlwQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcbiAgICAgIHRvb2x0aXBMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwTGluZVdpZHRoOiAnMCcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm94LXNoYWRvdzogMHB4IDJweCA0NnB4IDAgcmdiYSgwLCAyNTUsIDE3MCwgMC4zNSk7IGJvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDhweCAyNHB4OycsXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMyxcbiAgICAgIHhBeGlzVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmcsXG4gICAgICB5QXhpc1NwbGl0TGluZTogYmFzZVRoZW1lVmFyaWFibGVzLnNlcGFyYXRvcixcblxuICAgICAgaXRlbUJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyMixcbiAgICAgIGxpbmVTdHlsZTogJ2RvdHRlZCcsXG4gICAgICBsaW5lV2lkdGg6ICc2JyxcbiAgICAgIGxpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICBsaW5lR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZyxcbiAgICAgIGxpbmVTaGFkb3c6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzQsXG5cbiAgICAgIGFyZWFHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLmJnMixcbiAgICAgIGFyZWFHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzMsXG4gICAgICBzaGFkb3dMaW5lRGFya0JnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmczLFxuICAgIH0sXG5cbiAgICBidWJibGVNYXA6IHtcbiAgICAgIHRpdGxlQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICBhcmVhQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzQsXG4gICAgICBhcmVhSG92ZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnSGlnaGxpZ2h0LFxuICAgICAgYXJlYUJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYm9yZGVyNSxcbiAgICB9LFxuXG4gICAgcHJvZml0QmFyQW5pbWF0aW9uRWNoYXJ0OiB7XG4gICAgICB0ZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG5cbiAgICAgIGZpcnN0QW5pbWF0aW9uQmFyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kQW5pbWF0aW9uQmFyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuXG4gICAgICBzcGxpdExpbmVTdHlsZU9wYWNpdHk6ICcxJyxcbiAgICAgIHNwbGl0TGluZVN0eWxlV2lkdGg6ICcxJyxcbiAgICAgIHNwbGl0TGluZVN0eWxlQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuXG4gICAgICB0b29sdGlwVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgdG9vbHRpcEZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgdG9vbHRpcEZvbnRTaXplOiAnMTYnLFxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEJvcmRlcldpZHRoOiAnMScsXG4gICAgICB0b29sdGlwRXh0cmFDc3M6ICdib3JkZXItcmFkaXVzOiAxMHB4OyBwYWRkaW5nOiA0cHggMTZweDsnLFxuICAgIH0sXG5cbiAgICB0cmFmZmljQmFyRWNoYXJ0OiB7XG4gICAgICBncmFkaWVudEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nTGlnaHQsXG4gICAgICBncmFkaWVudFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZyxcbiAgICAgIHNoYWRvdzogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmdMaWdodCxcbiAgICAgIHNoYWRvd0JsdXI6ICc1JyxcblxuICAgICAgYXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIGF4aXNGb250U2l6ZTogJzEyJyxcblxuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogNHB4IDE2cHg7JyxcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcblxuICAgIGNvdW50cnlPcmRlcnM6IHtcbiAgICAgIGNvdW50cnlCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjQsXG4gICAgICBjb3VudHJ5RmlsbENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmczLFxuICAgICAgY291bnRyeUJvcmRlcldpZHRoOiAnMScsXG4gICAgICBob3ZlcmVkQ291bnRyeUJvcmRlckNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIGhvdmVyZWRDb3VudHJ5RmlsbENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxuICAgICAgaG92ZXJlZENvdW50cnlCb3JkZXJXaWR0aDogJzEnLFxuXG4gICAgICBjaGFydEF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxuICAgICAgY2hhcnRBeGlzVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmcsXG4gICAgICBjaGFydEF4aXNGb250U2l6ZTogJzE2JyxcbiAgICAgIGNoYXJ0R3JhZGllbnRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBjaGFydEdyYWRpZW50RnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnlMaWdodCxcbiAgICAgIGNoYXJ0QXhpc1NwbGl0TGluZTogYmFzZVRoZW1lVmFyaWFibGVzLnNlcGFyYXRvcixcbiAgICAgIGNoYXJ0U2hhZG93TGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeUxpZ2h0LFxuXG4gICAgICBjaGFydExpbmVCb3R0b21TaGFkb3dDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG5cbiAgICAgIGNoYXJ0SW5uZXJMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgfSxcblxuICAgIGVjaGFydHM6IHtcbiAgICAgIGJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0ZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICBheGlzTGluZUNvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmdUZXh0LFxuICAgICAgc3BsaXRMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG4gICAgICBpdGVtSG92ZXJTaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICB0b29sdGlwQmFja2dyb3VuZENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIGFyZWFPcGFjaXR5OiAnMScsXG4gICAgfSxcblxuICAgIGNoYXJ0anM6IHtcbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG4gICAgICB0ZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgfSxcblxuICAgIG9yZGVyczoge1xuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwTGluZUNvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICB0b29sdGlwTGluZVdpZHRoOiAnMCcsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogOHB4IDI0cHg7JyxcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICB0b29sdGlwRm9udFNpemU6ICcyMCcsXG5cbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxuICAgICAgYXhpc0ZvbnRTaXplOiAnMTYnLFxuICAgICAgYXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnLFxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG5cbiAgICAgIGl0ZW1Cb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBsaW5lU3R5bGU6ICdzb2xpZCcsXG4gICAgICBsaW5lV2lkdGg6ICc0JyxcblxuICAgICAgLy8gZmlyc3QgbGluZVxuICAgICAgZmlyc3RBcmVhR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICBmaXJzdEFyZWFHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICBmaXJzdFNoYWRvd0xpbmVEYXJrQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG5cbiAgICAgIC8vIHNlY29uZCBsaW5lXG4gICAgICBzZWNvbmRMaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kTGluZUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG5cbiAgICAgIHNlY29uZEFyZWFHcmFkRnJvbTogJ3JnYmEoMTYxLCAxMTAsIDI1NSwgMC44KScsXG4gICAgICBzZWNvbmRBcmVhR3JhZFRvOiAncmdiYSgxNjEsIDExMCwgMjU1LCAwLjUpJyxcbiAgICAgIHNlY29uZFNoYWRvd0xpbmVEYXJrQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuXG4gICAgICAvLyB0aGlyZCBsaW5lXG4gICAgICB0aGlyZExpbmVHcmFkRnJvbTogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICB0aGlyZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzTGlnaHQsXG5cbiAgICAgIHRoaXJkQXJlYUdyYWRGcm9tOiAncmdiYSgwLCAyMTQsIDE0MywgMC43KScsXG4gICAgICB0aGlyZEFyZWFHcmFkVG86ICdyZ2JhKDAsIDIxNCwgMTQzLCAwLjQpJyxcbiAgICAgIHRoaXJkU2hhZG93TGluZURhcmtCZzogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgfSxcblxuICAgIHByb2ZpdDoge1xuICAgICAgYmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcbiAgICAgIHRleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnVGV4dCxcbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxuICAgICAgc3BsaXRMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG4gICAgICBhcmVhT3BhY2l0eTogJzEnLFxuXG4gICAgICBheGlzRm9udFNpemU6ICcxNicsXG4gICAgICBheGlzVGV4dENvbG9yOiBiYXNlVGhlbWVWYXJpYWJsZXMuZmcsXG5cbiAgICAgIC8vIGZpcnN0IGJhclxuICAgICAgZmlyc3RMaW5lR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICBmaXJzdExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5iZzIsXG4gICAgICBmaXJzdExpbmVTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgLy8gc2Vjb25kIGJhclxuICAgICAgc2Vjb25kTGluZUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZExpbmVHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kTGluZVNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMCknLFxuXG4gICAgICAvLyB0aGlyZCBiYXJcbiAgICAgIHRoaXJkTGluZUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIHRoaXJkTGluZUdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3NMaWdodCxcbiAgICAgIHRoaXJkTGluZVNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgIH0sXG5cbiAgICBvcmRlclByb2ZpdExlZ2VuZDoge1xuICAgICAgZmlyc3RJdGVtOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIHNlY29uZEl0ZW06IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgdGhpcmRJdGVtOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcyLFxuICAgIH0sXG5cbiAgICB2aXNpdG9yczoge1xuICAgICAgdG9vbHRpcEJnOiBiYXNlVGhlbWVWYXJpYWJsZXMuYmcsXG4gICAgICB0b29sdGlwTGluZUNvbG9yOiAncmdiYSgwLCAwLCAwLCAwKScsXG4gICAgICB0b29sdGlwTGluZVdpZHRoOiAnMScsXG4gICAgICB0b29sdGlwQm9yZGVyQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXIyLFxuICAgICAgdG9vbHRpcEV4dHJhQ3NzOiAnYm9yZGVyLXJhZGl1czogMTBweDsgcGFkZGluZzogOHB4IDI0cHg7JyxcbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICB0b29sdGlwRm9udFNpemU6ICcyMCcsXG5cbiAgICAgIGF4aXNMaW5lQ29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5ib3JkZXI0LFxuICAgICAgYXhpc0ZvbnRTaXplOiAnMTYnLFxuICAgICAgYXhpc1RleHRDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmZnLFxuICAgICAgeUF4aXNTcGxpdExpbmU6IGJhc2VUaGVtZVZhcmlhYmxlcy5zZXBhcmF0b3IsXG5cbiAgICAgIGl0ZW1Cb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG4gICAgICBsaW5lU3R5bGU6ICdkb3R0ZWQnLFxuICAgICAgbGluZVdpZHRoOiAnNicsXG4gICAgICBsaW5lR3JhZEZyb206ICcjZmZmZmZmJyxcbiAgICAgIGxpbmVHcmFkVG86ICcjZmZmZmZmJyxcbiAgICAgIGxpbmVTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgYXJlYUdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIGFyZWFHcmFkVG86IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5TGlnaHQsXG5cbiAgICAgIGlubmVyTGluZVN0eWxlOiAnc29saWQnLFxuICAgICAgaW5uZXJMaW5lV2lkdGg6ICcxJyxcblxuICAgICAgaW5uZXJBcmVhR3JhZEZyb206IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgICAgaW5uZXJBcmVhR3JhZFRvOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICB9LFxuXG4gICAgdmlzaXRvcnNMZWdlbmQ6IHtcbiAgICAgIGZpcnN0SWNvbjogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3MsXG4gICAgICBzZWNvbmRJY29uOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICB9LFxuXG4gICAgdmlzaXRvcnNQaWU6IHtcbiAgICAgIGZpcnN0UGllR3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIGZpcnN0UGllR3JhZGllbnRSaWdodDogYmFzZVRoZW1lVmFyaWFibGVzLnN1Y2Nlc3NMaWdodCxcbiAgICAgIGZpcnN0UGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICAgIGZpcnN0UGllUmFkaXVzOiBbJzcwJScsICc5MCUnXSxcblxuICAgICAgc2Vjb25kUGllR3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZyxcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nTGlnaHQsXG4gICAgICBzZWNvbmRQaWVTaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknLFxuICAgICAgc2Vjb25kUGllUmFkaXVzOiBbJzYwJScsICc5NSUnXSxcbiAgICAgIHNoYWRvd09mZnNldFg6ICcwJyxcbiAgICAgIHNoYWRvd09mZnNldFk6ICczJyxcbiAgICB9LFxuXG4gICAgdmlzaXRvcnNQaWVMZWdlbmQ6IHtcbiAgICAgIGZpcnN0U2VjdGlvbjogYmFzZVRoZW1lVmFyaWFibGVzLndhcm5pbmcsXG4gICAgICBzZWNvbmRTZWN0aW9uOiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICB9LFxuXG4gICAgZWFybmluZ1BpZToge1xuICAgICAgcmFkaXVzOiBbJzY1JScsICcxMDAlJ10sXG4gICAgICBjZW50ZXI6IFsnNTAlJywgJzUwJSddLFxuXG4gICAgICBmb250U2l6ZTogJzIyJyxcblxuICAgICAgZmlyc3RQaWVHcmFkaWVudExlZnQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5zdWNjZXNzLFxuICAgICAgZmlyc3RQaWVHcmFkaWVudFJpZ2h0OiBiYXNlVGhlbWVWYXJpYWJsZXMuc3VjY2VzcyxcbiAgICAgIGZpcnN0UGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgc2Vjb25kUGllR3JhZGllbnRMZWZ0OiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIHNlY29uZFBpZUdyYWRpZW50UmlnaHQ6IGJhc2VUaGVtZVZhcmlhYmxlcy5wcmltYXJ5LFxuICAgICAgc2Vjb25kUGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcblxuICAgICAgdGhpcmRQaWVHcmFkaWVudExlZnQ6IGJhc2VUaGVtZVZhcmlhYmxlcy53YXJuaW5nLFxuICAgICAgdGhpcmRQaWVHcmFkaWVudFJpZ2h0OiBiYXNlVGhlbWVWYXJpYWJsZXMud2FybmluZyxcbiAgICAgIHRoaXJkUGllU2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDApJyxcbiAgICB9LFxuXG4gICAgZWFybmluZ0xpbmU6IHtcbiAgICAgIGdyYWRGcm9tOiBiYXNlVGhlbWVWYXJpYWJsZXMucHJpbWFyeSxcbiAgICAgIGdyYWRUbzogYmFzZVRoZW1lVmFyaWFibGVzLnByaW1hcnksXG5cbiAgICAgIHRvb2x0aXBUZXh0Q29sb3I6IGJhc2VUaGVtZVZhcmlhYmxlcy5mZ1RleHQsXG4gICAgICB0b29sdGlwRm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgICB0b29sdGlwRm9udFNpemU6ICcxNicsXG4gICAgICB0b29sdGlwQmc6IGJhc2VUaGVtZVZhcmlhYmxlcy5iZyxcbiAgICAgIHRvb2x0aXBCb3JkZXJDb2xvcjogYmFzZVRoZW1lVmFyaWFibGVzLmJvcmRlcjIsXG4gICAgICB0b29sdGlwQm9yZGVyV2lkdGg6ICcxJyxcbiAgICAgIHRvb2x0aXBFeHRyYUNzczogJ2JvcmRlci1yYWRpdXM6IDEwcHg7IHBhZGRpbmc6IDRweCAxNnB4OycsXG4gICAgfSxcbiAgfSxcbn0gYXMgTmJKU1RoZW1lT3B0aW9ucztcbiJdfQ==