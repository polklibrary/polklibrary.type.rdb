# -*- coding: utf-8 -*-
"""Setup tests for this package."""
from polklibrary.type.rdb.testing import POLKLIBRARY_TYPE_RDB_INTEGRATION_TESTING  # noqa
from plone import api

import unittest


class TestSetup(unittest.TestCase):
    """Test that polklibrary.type.rdb is properly installed."""

    layer = POLKLIBRARY_TYPE_RDB_INTEGRATION_TESTING

    def setUp(self):
        """Custom shared utility setup for tests."""
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')

    def test_product_installed(self):
        """Test if polklibrary.type.rdb is installed with portal_quickinstaller."""
        self.assertTrue(self.installer.isProductInstalled('polklibrary.type.rdb'))

    def test_browserlayer(self):
        """Test that IPolklibraryTypeRdbLayer is registered."""
        from polklibrary.type.rdb.interfaces import IPolklibraryTypeRdbLayer
        from plone.browserlayer import utils
        self.assertIn(IPolklibraryTypeRdbLayer, utils.registered_layers())


class TestUninstall(unittest.TestCase):

    layer = POLKLIBRARY_TYPE_RDB_INTEGRATION_TESTING

    def setUp(self):
        self.portal = self.layer['portal']
        self.installer = api.portal.get_tool('portal_quickinstaller')
        self.installer.uninstallProducts(['polklibrary.type.rdb'])

    def test_product_uninstalled(self):
        """Test if polklibrary.type.rdb is cleanly uninstalled."""
        self.assertFalse(self.installer.isProductInstalled('polklibrary.type.rdb'))

    def test_browserlayer_removed(self):
        """Test that IPolklibraryTypeRdbLayer is removed."""
        from polklibrary.type.rdb.interfaces import IPolklibraryTypeRdbLayer
        from plone.browserlayer import utils
        self.assertNotIn(IPolklibraryTypeRdbLayer, utils.registered_layers())
